const discord = require("discord.js");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");

module.exports.run = async (client, message, args) => {

    let option1 = new MessageMenuOption()
        .setLabel("Sollicitaties")
        .setValue("Optie 1")
        .setDescription("Vragen over Sollicitaties")
        .setDefault()
        .setEmoji(`📝`)

    let option2 = new MessageMenuOption()
        .setLabel("Algemene Vraag")
        .setValue("Optie 2")
        .setDescription("Maakt een ticket aan met deze rede.")
        .setDefault()
        .setEmoji(`📝`)

    let option3 = new MessageMenuOption()
        .setLabel("Speler Klacht")
        .setValue("Optie 3")
        .setDescription("Maakt een ticket aan met deze rede.")
        .setDefault()
        .setEmoji(`📝`)

    let option4 = new MessageMenuOption()
        .setLabel("Staff Klacht")
        .setValue("Optie 4")
        .setDescription("Maakt een ticket aan met deze rede.")
        .setDefault()
        .setEmoji(`📝`)


    let selection = new MessageMenu()
        .setID("Selection")
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder("Klik hier om een ticket aan te maken")
        .addOption(option1)
        .addOption(option2)
        .addOption(option3)
        .addOption(option4)

    var embed = new discord.MessageEmbed()
        .setTitle("Ticket Informatiepaneel")
        .setDescription("Welkom bij het ticket informatiepaneel! Klik hieronder om een onderwerp van je ticket te bepalen. Je ticket wordt dan automatisch aangemaakt met deze rede.")
        .setColor("#010e7d")
        .setTimestamp()
        .setFooter("Ticket Management - Eindhoven")

    let menumsg = await message.channel.send(embed, selection)

    function menuselection(menu) {
        switch (menu.values[0]) {
            case "Optie 1":
                menu.reply.send('Vragen over aanvragen worden niet beantwoord in een ticket. Bekijk ons mededelingen kanaal en je zult zien welke applicaties beschikbaar zijn. Lees onze faq goed door.', true)
                break;
            case "Optie 2":
                var categoryID = "867101613725974549";

                var userName = "ticket";
                var userDiscriminator = message.author.id;

                var ticketBestaat = false;

                var ticketUser = message.author;

                if (ticketBestaat) return;

                message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
                    (createdChannel) => {
                        createdChannel.setParent(categoryID).then(
                            (settedParent) => {

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                                    SEND_MESSAGES: false,
                                    VIEW_CHANNEL: false
                                });

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@Speler'), {
                                    SEND_MESSAGES: false,
                                    VIEW_CHANNEL: false
                                });

                                settedParent.updateOverwrite(message.author.id, {
                                    CREATE_INSTANT_INVITE: false,
                                    READ_MESSAGES: true,
                                    SEND_MESSAGES: true,
                                    ATTACH_FILES: true,
                                    CONNECT: true,
                                    ADD_REACTIONS: true,
                                    VIEW_CHANNEL: true,
                                    READ_MESSAGE_HISTORY: true
                                });

                                var embedParent = new discord.MessageEmbed()
                                    .setTitle(`Hallo! ${message.author.tag}`)
                                    .setDescription(`Welkom bij je Ticket! Een medewerker neemt zo spoedig mogelijk contact met u op. Tickets kunnen gevoelige en intellectuele innerlijken bevatten. Zorg hier dus ook goed voor. Misbruik van dit systeem kan ernstige gevolgen hebben. \n\n **Reden aanmaken ticket:** Algemene Vraag`)
                                    .setColor("#ffd500")
                                    .setTimestamp();

                                settedParent.send(embedParent);
                                settedParent.send(`<@${message.author.id}>`);

                                var embed = new discord.MessageEmbed()
                                    .setTitle("Ticket Aangemaakt")
                                    .setDescription(`Hallo ${message.author.tag}! Je ticket in ${message.guild.name} is succesvol aangemaakt. Check ${settedParent} om naar je ticket te gaan.`)
                                    .setColor("GREEN")
                                    .setTimestamp();

                                message.channel.send(embed);

                            }
                        ).catch(err => {
                            message.channel.send("Er is iets misgelopen");
                        });
                    }
                ).catch(err => {
                    message.channel.send("Er is iets misgelopen");
                });
                menu.reply.send(`Je ticket is succesvol aangemaakt.`, true)
                break;
            case "Optie 3":

                var categoryID = "867101613725974549";

                var userName = "ticket";
                var userDiscriminator = message.author.id;

                var ticketBestaat = false;

                var ticketUser = message.author;

                if (ticketBestaat) return;

                message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
                    (createdChannel) => {
                        createdChannel.setParent(categoryID).then(
                            (settedParent) => {

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                                    SEND_MESSAGES: false,
                                    VIEW_CHANNEL: false
                                });

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@Speler'), {
                                    SEND_MESSAGES: false,
                                    VIEW_CHANNEL: false
                                });

                                settedParent.updateOverwrite(message.author.id, {
                                    CREATE_INSTANT_INVITE: false,
                                    READ_MESSAGES: true,
                                    SEND_MESSAGES: true,
                                    ATTACH_FILES: true,
                                    CONNECT: true,
                                    ADD_REACTIONS: true,
                                    VIEW_CHANNEL: true,
                                    READ_MESSAGE_HISTORY: true
                                });

                                var embedParent = new discord.MessageEmbed()
                                    .setTitle(`Hallo! ${message.author.tag}`)
                                    .setDescription(`Welkom bij je Ticket! Een medewerker neemt zo spoedig mogelijk contact met u op. Tickets kunnen gevoelige en intellectuele innerlijken bevatten. Zorg hier dus ook goed voor. Misbruik van dit systeem kan ernstige gevolgen hebben. \n\n **Reden aanmaken ticket:** Speler Klacht`)
                                    .setColor("#ffd500")
                                    .setTimestamp();

                                settedParent.send(embedParent);
                                settedParent.send(`<@${message.author.id}>`);

                                var embed = new discord.MessageEmbed()
                                    .setTitle("Ticket Aangemaakt")
                                    .setDescription(`Hallo ${message.author.tag}! Je ticket in ${message.guild.name} is succesvol aangemaakt. Check ${settedParent} om naar je ticket te gaan.`)
                                    .setColor("GREEN")
                                    .setTimestamp();

                                message.channel.send(embed);

                            }
                        ).catch(err => {
                            message.channel.send("Er is iets misgelopen");
                        });
                    }
                ).catch(err => {
                    message.channel.send("Er is iets misgelopen");
                });
                menu.reply.send('Je hebt succesvol een ticket aangemaakt.', true)
                break;
            case "Optie 4":

                var categoryID = "867101613725974549";

                var userName = "klacht";
                var userDiscriminator = message.author.id;

                var ticketBestaat = false;

                var ticketUser = message.author;

                if (ticketBestaat) return;

                message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
                    (createdChannel) => {
                        createdChannel.setParent(categoryID).then(
                            (settedParent) => {

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                                    SEND_MESSAGES: false,
                                    VIEW_CHANNEL: false
                                });

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@Speler'), {
                                    SEND_MESSAGES: false,
                                    VIEW_CHANNEL: false
                                });

                                settedParent.updateOverwrite(message.author.id, {
                                    CREATE_INSTANT_INVITE: false,
                                    READ_MESSAGES: true,
                                    SEND_MESSAGES: true,
                                    ATTACH_FILES: true,
                                    CONNECT: true,
                                    ADD_REACTIONS: true,
                                    VIEW_CHANNEL: true,
                                    READ_MESSAGE_HISTORY: true
                                });

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.id === "867099452689612872"), {

                                    VIEW_CHANNEL: false,
                                    SEND_MESSAGES: false

                                });

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.id === "867481061771313162"), {

                                    VIEW_CHANNEL: true,
                                    SEND_MESSAGES: true
                                });

                                settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === "Manager"), {

                                    VIEW_CHANNEL: true,
                                    SEND_MESSAGES: true
                                });

                                var embedParent = new discord.MessageEmbed()
                                    .setTitle(`Hallo! ${message.author.tag}`)
                                    .setDescription(`Welkom bij je Ticket! Een medewerker van de afdelig personeelszaken neemt zo spoedig mogelijk contact met u op. Tickets kunnen gevoelige en intellectuele innerlijken bevatten. Zorg hier dus ook goed voor. Misbruik van dit systeem kan ernstige gevolgen hebben. \n\n **Reden aanmaken ticket:** Staff Klacht`)
                                    .setColor("#ffd500")
                                    .setTimestamp();

                                settedParent.send(embedParent);
                                settedParent.send(`<@${message.author.id}>`);

                                var embed = new discord.MessageEmbed()
                                    .setTitle("Ticket Aangemaakt")
                                    .setDescription(`Hallo ${message.author.tag}! Je ticket in ${message.guild.name} is succesvol aangemaakt. Check ${settedParent} om naar je ticket te gaan.`)
                                    .setColor("GREEN")
                                    .setTimestamp();

                                message.channel.send(embed);

                            }
                        ).catch(err => {
                            message.channel.send("Er is iets misgelopen");
                        });
                    }
                ).catch(err => {
                    message.channel.send("Er is iets misgelopen");
                });
                menu.reply.send('Je hebt succesvol een ticket aangemaakt.', true)
                break;
            default:
                break;
        }
    }

    client.on("clickMenu", (menu) => {
        if (menu.message.id == menumsg.id) {
            if (menu.clicker.user.id == message.author.id) menuselection(menu)
            else menu.reply(':x: Je hebt hiervoor geen rechten', true)
        }
    })

}
module.exports.help = {
    name: "new",
    description: "Maakt ticket aan",
}