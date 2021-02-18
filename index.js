const Discord = require("discord.js");
const config = require("./config.json");
const package = require("./package.json");
const client = new Discord.Client();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.on("message", async function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    const commandBody = message.content.slice(config.prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const ping = require("./commands/ping.js");
    const help = require("./commands/help");
    const say = require("./commands/say");
    const coucou = require("./commands/coucou.js");
    const reboot = require("./commands/reboot.js");
    const version = require("./commands/version.js");
    const floguihug = require("./commands/floguihug.js");
    const stop = require("./commands/stop.js");
    const clear = require("./commands/clear.js");
    const to_console = require("./commands/to_console.js");

    switch (command) {
        case help.name:
            help.execute(message, args);
            break;
        case ping.name:
            ping.execute(message, args);
            break;
        case coucou.name:
            coucou.execute(message, args);
            break;
        case say.name:
            say.execute(message, args);
            break;
        case floguihug.name:
            floguihug.execute(message, args);
            break;
        case version.name:
            version.execute(message, args);
            break;
        case reboot.name:
            reboot.execute(message, args);
            break;
        case stop.name:
            stop.execute(message, args);
            break;
        case clear.name:
            clear.execute(message, args);
            break;
        case to_console.name:
            to_console.execute(message, args);
            break
        default:
            break;
    }
});

client.login(config.BOT_TOKEN);