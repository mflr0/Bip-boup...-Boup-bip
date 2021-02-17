const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const prefix = "$";

client.on("message", async function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command == "help") {
        message.channel.send(`Voici la page d'aide, vous trouverez ici toutes les commandes qui seront ajoutées:`);
        message.channel.send(`$ping: permet de ping le bot.\n$coucou: Hello World.\n$say: fait parler le bot.\n$version: Permet d'obtenir la version du bot.`);
    } else if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`:ping_pong: Pong! Ce message a une latence de ${timeTaken}ms.`);
    } else if (command === "coucou") {
        message.channel.send(`:wave: Hello World`);
    } else if (command === "say") {
        if (args.length >= 1) {
            message.channel.send(`${message.content.slice(command.length + 2)}`);
            message.delete();
        }
        else
            message.channel.send(`:x: Je peux pas deviner ce que tu veux que je dise`);
    } else if (command === "floguihug") {
        message.channel.send(`:eggplant::sweat_drops: Je te baise!`);
    } else if (command === "version") {
        const version = require("./package.json");
        message.channel.send(`:robot: Je suis en version ${version.version}`);
    } else if (command === "reboot") {
        if (message.author.id != 650432748275892253 && message.author.id != 175948123183644672 && message.author.id != 297686294086287360)
            message.channel.send(`:x: Tu n'as pas la permission de me redémarrer!`);
        else {
            msg = await message.channel.send(`<a:loader:811689262608941066> Redémarrage...`);
            client.destroy();
            client.login(config.BOT_TOKEN);
            console.log("Bot redémarré!")
            msg.edit(":white_check_mark: Redémarré !");
        }
    } else if (command === "stop") {
        if (message.author.id != 650432748275892253 && message.author.id != 175948123183644672 && message.author.id != 297686294086287360)
            message.channel.send(`:x: Tu n'as pas la permission de m'arrêter.`);
        else {
            msg = message.channel.send("<a:loader:811689262608941066> Arrêt...");
            await sleep(2000);
            client.login(config.BOT_TOKEN);
            msg.edit(":white_chek_mark: Arrêté!")
            client.destroy();
        }
    } //else if (command === "clear") {
      //  if (args.length === 1) {
      //      nbr = args{1};
      //      if (Number.isInteger(nbr))
      //          message.channel.send("il s'agit d'un chiffre");
      //      else
      //          message.channel.send("Ce n'est pas un chiffre, bitch!")
      //  }
      //  else {
      //      message.channel.send(":x: Indiquez le nombre de messages a supprimer.");
      //  }
    //}
});

client.login(config.BOT_TOKEN);
