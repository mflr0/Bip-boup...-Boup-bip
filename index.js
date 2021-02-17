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

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`:ping_pong: Pong! Ce message a une latence de ${timeTaken}ms.`);
    } else if (command === "coucou") {
        message.channel.send(`:wave: Hello World`);
    } else if (command === "say") {
        if (args.length >= 1)
            message.channel.send(`${args[1]}`);
        else
            message.channel.send(`:x: Je ne peux rien dire petit coquin`);
    } else if (command === "floguihug") {
        message.channel.send(`:eggplant::sweat_drops: Je te baise!`);
    }
});

client.login(config.BOT_TOKEN);
