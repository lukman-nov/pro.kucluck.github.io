const { MessageEmbed, Message } = require("discord.js");
const { TrackUtils } = require("erela.js");
const _ = require("lodash");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
  name: "search",
  description: "Menampilkan hasil lagu berdasarkan kata kunci pencarian",
  usage: "[song]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["se", "cari"],
  /**
   *
   * @param {import("../structures/KucluckProMusik")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **Kamu harus berada di voice channel untu memainkan lagu.~**"
      );
    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return client.sendTime(
        message.channel,
        ":x: | **Kamu harus berada di voice channel yang sama dengan saya untuk menggunakan command ini.~**"
      );

    let SearchString = args.join(" ");
    if (!SearchString)
      return client.sendTime(
        message.channel,
        `**Silahkan menggunakan - **\`${GuildDB.prefix}search [kata kunci]\``
      );
    let CheckNode = client.Manager.nodes.get(client.botconfig.Lavalink.id);
    if (!CheckNode || !CheckNode.connected) {
      return client.sendTime(
        message.channel,
        "❌ | **ERROR** Lavalink node tidak terhubung."
      );
    }
    const player = client.Manager.create({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
      selfDeafen: client.botconfig.ServerDeafen,
      volume: client.botconfig.DefaultVolume,
    });

    if (player.state != "CONNECTED") await player.connect();

    let Searched = await player.search(SearchString, message.author);
    if (Searched.loadType == "NO_MATCHES")
      return client.sendTime(
        message.channel,
        "Tidak berhasil mencari kata kunci " + SearchString
      );
    else {
      Searched.tracks = Searched.tracks.map((s, i) => {
        s.index = i;
        return s;
      });
      let songs = _.chunk(Searched.tracks, 10);
      let Pages = songs.map((songz) => {
        let MappedSongs = songz.map(
          (s) =>
            `\`${s.index + 1}.\` [${s.title}](${
              s.uri
            }) \nDurasi: \`${prettyMilliseconds(s.duration, {
              colonNotation: true,
            })}\``
        );

        let em = new MessageEmbed()
          .setAuthor(
            "Hasil pencarian " + SearchString,
            client.botconfig.IconURL
          )
          .setColor(client.botconfig.EmbedColor)
          .setDescription(MappedSongs.join("\n\n"));
        return em;
      });

      if (!Pages.length || Pages.length === 1)
        return message.channel.send(Pages[0]);
      else client.Pagination(message, Pages);

      let w = (a) => new Promise((r) => setInterval(r, a));
      await w(500); //waits 500ms cuz needed to wait for the above song search embed to send ._.
      let msg = await message.channel.send(
        "**Ketik dan kirim nomor lagu yang kamu ingin mainkan!**"
      );

      let er = false;
      let SongID = await message.channel
        .awaitMessages((msg) => message.author.id === msg.author.id, {
          max: 1,
          errors: ["time"],
          time: 30000,
        })
        .catch(() => {
          er = true;
          msg.edit(
            "**Kamu terlalu lama merespon. Ulangi command untuk mencari lagu.**"
          );
        });
      if (er) return;
      /**@type {Message} */
      let SongIDmsg = SongID.first();

      if (!parseInt(SongIDmsg.content))
        return client.sendTime(
          message.channel,
          "Silakan kirim nomor ID lagu yang benar"
        );
      let Song = Searched.tracks[parseInt(SongIDmsg.content) - 1];
      if (!Song)
        return client.sendTime(
          message.channel,
          "Tidak ada lagu yang ditemukan untuk ID yang diberikan"
        );
      player.queue.add(Song);
      if (!player.playing && !player.paused && !player.queue.size)
        player.play();
      let SongAddedEmbed = new MessageEmbed();
      SongAddedEmbed.setAuthor(`Berhasil ditambahkan ke playlist`, client.botconfig.IconURL);
      SongAddedEmbed.setThumbnail(Song.displayThumbnail());
      SongAddedEmbed.setColor(client.botconfig.EmbedColor);
      SongAddedEmbed.setDescription(`[${Song.title}](${Song.uri})`);
      SongAddedEmbed.addField("Uploader", `${Song.author}`, true);
      SongAddedEmbed.addField(
        "Durasi",
        `\`${prettyMilliseconds(player.queue.current.duration, {
          colonNotation: true,
        })}\``,
        true
      );
      if (player.queue.totalSize > 1)
        SongAddedEmbed.addField(
          "Berada di antrian",
          `${player.queue.size - 0}`,
          true
        );
      message.channel.send(SongAddedEmbed);
    }
  },
};
