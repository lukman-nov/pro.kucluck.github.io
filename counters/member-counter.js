module.exports = async (client) =>{
    let guild = client.guilds.cache.get('898516000604061696');
    setInterval(() =>{
        let memberCount = guild.memberCount;
        let channel = guild.channels.cache.get('902140586490994708');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 100000);
}