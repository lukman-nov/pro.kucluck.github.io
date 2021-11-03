const { channel } = require("diagnostics_channel");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  category: "information",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd", "bantuan", "tolong"],
  /**
   *
   * @param {import("../structures/KucluckProMusik")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {

    let Embeddm = new MessageEmbed()
      .setAuthor(`${client.user.username}`, client.botconfig.BotLogo)
      .setColor(client.botconfig.EmbedColor)
      .setDescription(`Aku adalah bot serba guna yang akan membantu mengembangkan dan memudahkan channel Discord kalian. \n \n **Support:** [**kucluck.com/support**](${client.botconfig.SupportServer}) \n **Website:** [**pro.kucluck.com**](${client.botconfig.Website})\n \n
      Gunakan *${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}help <command>* untuk melihat detail command.`)
      .addField('🇮 **Information**', '`!!help`, `!!info`, `!!premium`')
      .addField('💎 **Premium**', '`!!bassboost`,`!!bump`,`!!skipto`,`!!savesong`,`!!loopqueue`,`!!lyrics`,`!!volume`')
      .addField('🎵 **Music**','`!!clear`, `!!join`,`!!disconnect`,`!!loopsong`,`!!move`,`!!nowplaying`,`!!pause`,`!!play`,`!!queue`,`!!remove`,`!!resume`,`!!search`,`!!seek`,`!!shuffle`,`!!skip`,')
      .addField('🛠️ **Admin**', '`!!config`')
      .addField('👻 **Fun**', '`!!youtube`, `!!ava`')
      .setTimestamp()
      .setFooter(`Kucluck Pro v${require("../package.json").version}`);

      message.react("👍");
      if (!args[0]) message.author.send(Embeddm) && message.channel.send(`${message.author} Aku sudah DM kamu, silahkan di lihat.`)
      else {
        let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
        if (!cmd)
        return client.sendTime(message.channel, `❌ | Tidak menemukan command yang dimaksud.~`);

      let embedch = new MessageEmbed()
        .setAuthor(`Nama Command: ${cmd.name}`, client.botconfig.BotLogo)
        .setDescription(`${cmd.description} \n
        Prefix: ${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}`)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Menggunakan", `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${cmd.name}${cmd.usage ? " " + cmd.usage : ""}\``,true)
        .addField("Alias", `\`${cmd.aliases.join(", ")}\``, true)
        .addField("Permissions", "Member: " + cmd.permissions.member.join(", ") + "\nBot: " + cmd.permissions.channel.join(", "), true)
        .setFooter(`Kucluck Pro v${require("../package.json").version}`);

      if (!args[1]) message.channel.send(embedch);
      return;
    }
  },
};
