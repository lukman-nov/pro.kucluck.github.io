module.exports = async (client) =>{
    let guild = client.guilds.cache.get('901445288881963059');
    setInterval(() =>{
        let memberCount = guild.memberCount;
        let channel = guild.channels.cache.get('901770869251129364');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 100000);
}