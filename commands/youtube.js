const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "youtube",
  description: "Memulai sesi nonton bareng di Youtube",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["yt", "nobar"],
  /**
   *
   * @param {import("../structures/KucluckProMusik")} client
   * @param {require("discord.js").Message} message
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
      !message.member.voice.channel
        .permissionsFor(message.guild.me)
        .has("CREATE_INSTANT_INVITE")
    )
      return client.sendTime(
        message.channel,
        "❌ | **Bot tidak memiliki Permission untuk membuat undangan!**"
      );

    let Invite = await message.member.voice.channel.activityInvite(
      "755600276941176913"
    ); //Made using discordjs-activity package
    let embed = new MessageEmbed()
      .setAuthor(
        "YouTube Together",
        "https://cdn.discordapp.com/emojis/749289646097432667.png?v=1"
      )
      .setColor("#FF0000").setDescription(`
Menggunakan **YouTube Together** Kamu dapat menonton Youtube dengan teman-teman kamu di voice channel. Click *Join YouTube Together* untuk bergabung!

__**[Join YouTube Together](https://discord.com/invite/${Invite.code})**__

⚠ **NB:** Ini hanya berfungsi di Desktop
`);
    message.channel.send(embed);
  },
};
