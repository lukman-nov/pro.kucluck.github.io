const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "disconnect",
  category: "musik",
  description: "Berhenti memainkan musik dan leave voice channel",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["leave", "exit", "quit", "dc", "stop", "pergih", "cabut"],
  /**
   *
   * @param {import("../structures/KucluckProMusik")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let player = await client.Manager.get(message.guild.id);
    if (!message.member.voice.channel)
      return client.sendTime(
        message.channel,
        "❌ | **Kamu harus berada di voice channel untuk menggunakan command ini.~**"
      );
    if (!player)
      return client.sendTime(
        message.channel,
        "❌ | **Tidak ada lagu yang dimainkan untuk saat ini...**"
      );
    await client.sendTime(message.channel, ":notes: | **Aku cabut dulu yah dari voice channel :broken_heart:**");
    await message.react("✅");
    player.destroy();
  },
};
