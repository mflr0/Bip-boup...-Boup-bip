module.exports = {
    name: "stop",
    description: "Permet d'arreter le bot",
    sleep(ms) {
        const err = new Promise(resolve => setTimeout(resolve, ms));
    },
    async execute(message, args) {
        if (message.author.id != 650432748275892253 && message.author.id != 175948123183644672 && message.author.id != 297686294086287360)
            message.channel.send(`:x: Tu n'as pas la permission de m'arrêter.`);
        else {
            msg2 = message.channel.send("<a:loader:811689262608941066> Arrêt...");
            await this.sleep(2000);
            client.login(config.BOT_TOKEN);
            msg2.edit(":white_chek_mark: Arrêté!");
            console.log("Bot Arrêté!");
            client.destroy();
        }
    },
}