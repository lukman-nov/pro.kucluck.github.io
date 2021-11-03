const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "connect",
  category: "musik",
  description: "Berhenti memainkan musik dan leave voice channel",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["join", "masuk"],
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
        "❌ | **Kamu harus berada di voice channel untuk menggunakan command ini.~**"
      );

      const player = client.Manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
        selfDeafen: client.botconfig.ServerDeafen,
        volume: client.botconfig.DefaultVolume,
     });

      if (player.state != "CONNECTED") await player.connect();
      await client.sendTime(message.channel, ":notes: | **Aku temenin yah di voice channel :heart:**");
      await message.react("✅");
  },
};
