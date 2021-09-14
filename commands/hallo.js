const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setDescription(`Hallo ${message.author.tag}!`)
        .setColor("RANDOM");
    
    message.channel.send(embed);


}
module.exports.help = {
    name: "hallo",
}