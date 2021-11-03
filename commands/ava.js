const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  category: "fun",
  description: "Menampilkan avatar",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["ava", "foto", "photo"],
  /**
   *
   * @param {import("../structures/KucluckProMusik")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
     
    let embed = new MessageEmbed()
    if(!message.mentions.users.first()){
        embed.setTitle("Avatar kamu:")
        embed.setImage(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        embed.setColor("RANDOM")
        return message.channel.send(embed)
    }else{
        const user = message.mentions.users.first()
        embed.setTitle(`${user.tag}'s avatar`)
        embed.setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
        embed.setColor('RANDOM')
        return message.channel.send(embed)
    }
  },
};
