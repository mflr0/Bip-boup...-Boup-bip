const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();


const prefix = "$";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command == "help") {
        message.channel.send(`Voici la page d'aide, vous trouverez ici toutes les commandes qui seront ajoutées:`);
        message.channel.send(`$ping: permet de ping le bot.\n$coucou: Hello World.\n$say: buggué mais fera parler le bot.\n$version: Permet d'obtenir la version du bot.`);
    } else if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`:ping_pong: Pong! Ce message a une latence de ${timeTaken}ms.`);
    } else if (command === "coucou") {
        message.channel.send(`:wave: Hello World`);
    } else if (command === "say") {
        if (args.length >= 1)
            message.channel.send(`${args[0]}`);
        else
            message.channel.send(`:x: Je ne peux rien dire petit coquin`);
    } else if (command === "floguihug") {
        message.channel.send(`:eggplant::sweat_drops: Je te baise!`);
    } else if (command === "version") {
        const version = require("./package.json");
        message.channel.send(`:robot: Je suis en version ${version.version}`);
    } else if (message.author.id != "650432748275892253" || message.author.id != "175948123183644672" || message.author.id != "297686294086287360") return message.channel.send(`:x: Tu n'as pas la permission de me redémarrer!`) {

    }
});

client.login(config.BOT_TOKEN);
