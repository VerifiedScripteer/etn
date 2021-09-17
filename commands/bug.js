const discord = require("discord.js");
const { Collection, Client, MessageEmbed, Intents } = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[1]) return message.channel.send("Geef een bug op.");

    var channel = message.guild.channels.cache.find(ch => ch.id === "883406138417246249");

    var staffCH = message.guild.channels.cache.find(gc => gc.id === "888440114848616498");

    var succesvolEmbed = new discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("✅ Bug is succesvol verstuurd naar het desbetreffende kanaal!");

    message.channel.send(succesvolEmbed);

    var embed = new discord.MessageEmbed()
        .setTitle("Bug Melding")
        .setColor("#FF0000")
        .setAuthor(message.author.tag)
        .setDescription(`Bug van ${message.author.tag}\n ${args.slice(1).join(' ')}`)
        .setFooter(`Bug van ${message.author.username}`)
        .setTimestamp();
    var gembed = new discord.MessageEmbed()
        .setTitle("Bug Melding")
        .setColor("#FF0000")
        .setAuthor(message.author.tag)
        .setDescription(`Bug van ${message.author.tag}\n${args.slice(1).join(' ')}`)
        .setFooter(`Bug van ${message.author.tag}`)
        .setTimestamp();

    staffCH.send(gembed).then(async msg => {

        message.delete();

        var emoji = await promptMessage(msg, message.author, ["✅", "❌"]);

        if (emoji === "✅") {

            msg.delete();

            message.author.send("Je bugmelding Eindhoven is succesvol goedgekeurd en verstuurd naar het desbetreffende kanaal.");

            channel.send(embed);

        } else if (emoji === "❌") {

            message.delete();

            message.author.send("Je bugmelding in Eindhoven is afgewezen.");

        }


    })


}

// Emojis aan teksten kopellen.
async function promptMessage(message, author, reactions) {

    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
    for (const reaction of reactions) {
        await message.react(reaction);
    }

    var filter = (reaction) => reactions.includes(reaction.emoji.name);

    return message.awaitReactions(filter, { max: 1 }).then(collected => collected.first() && collected.first().emoji.name);

}

module.exports.help = {
    name: "bug",
    description: "Verstuurd een bug"
}