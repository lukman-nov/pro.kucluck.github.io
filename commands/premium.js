const {
    channel
} = require("diagnostics_channel");
const {
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "premium",
    category: "FYI",
    description: "Information about the bot",
    usage: "[command]",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["pro", "premi", "vip"],
    /**
     *
     * @param {import("../structures/KucluckProMusik")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, {
        GuildDB
    }) => {

        let Embed = new MessageEmbed()
            .setAuthor(`${client.botconfig.BotName}`, client.botconfig.BotLogo)
            .setColor(client.botconfig.EmbedColor)
            .setDescription(`Kami akan berterimakasih banyak untuk kalian yang ikut turut serta membantu pengembangan Kucluck Bot ini. Kami akan memberikan fitur **PREMIUM** yang kalian bisa gunakan di channel Discord kalian loh. \n \n Bagi kalian yang ingin menggunakan fitur ini kalian cukup donate sebesar **IDR 25.000** saja loh, dan kalian bisa menikmati fitur ini selama 1 Bulan. \n \n Untuk info lebih lanjut, kalian bisa kunjungi situs kami di: [**pro.kucluck.com**](${client.botconfig.Website})`)
            .addField('>**:gem: Fitur Premium:**', '> - Bass Booster \n > - Memindahkan lagu ke antrian pertama \n > - Melewatkan banyak lagu di playlist \n > - Menyimpan judul URL lagu yang sedang di mainkan \n > - Mengulangi playlist \n > - Menampilkan lirik lagu \n > - Mengatur volume bot \n > - 24/7 Stay di Voice Channel ')
            .setTimestamp()
            .setFooter(`Kucluck Pro v${require("../package.json").version}`);

        message.react("👍");
        message.author.send(Embed) && message.channel.send(`${message.author} Aku sudah DM kamu, silahkan di lihat.`)
        
    },
};