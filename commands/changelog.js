const { channel } = require("diagnostics_channel");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "changelog",
    category: "information",
    description: "Informasi tentang status update bot",
    usage: [],
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["cl", "log", "update"],
    /**
     *
     * @param {import("../structures/KucluckProMusik")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, {GuildDB}) => {

        let Embed = new MessageEmbed()
            .setAuthor(`${client.botconfig.BotName} v${require("../package.json").version}`, client.botconfig.BotLogo)
            .setTitle('**Change Log:**')
            .setColor(client.botconfig.EmbedColor)
            .setDescription(`- Menambahkan module agar support lagu dari **Spotify**. \n - Fixing command resume yang tidak bisa di gunakan sebelumnya. \n - Fix laging saat lagu berputar. \n \n dan menambahkan fitur-fitur baru: \n - **Bass Booster** untuk meningkatkan audio bass. \n - **Lyrics ** untuk menampilkan lirik lagu. \n - **Skip To** untuk melewatkan banyak lagu di playlist. \n - **Save Song** untuk menyimpan URL lagu yang dimainkan saat ini ke DM kamu. \n - **Loop Queue** untuk mengulang lagu yang ada diplaylist. \n - **Volume** untuk cek atau ubah volume saat ini. \n - **Loop Song** untuk mengulang lagu yang sedang dimainkan. \n - **Now Playing** untuk melihat lagu yang sedang di mainkan. \n - **Remove ** untuk membuang salah satu lagu yang yang ada di playlist. \n - **Seek** untuk mempercepat durasi lagu ke waktu yang di inginkan. \n - **Youtube** untuk memulai sesi nonton bareng di Youtube. \n - **Config** untuk mengedit pengaturan bot. \n - **Update** Menginformasikan change log terbaru.`)
            .setTimestamp()
            .setFooter(`Kucluck Pro v${require("../package.json").version}`);
        message.channel.send(Embed)
    },
};