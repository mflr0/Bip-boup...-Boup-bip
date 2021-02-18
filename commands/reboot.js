module.exports = {
    name: "reboot",
    description: "Permet de redémarer le bot {OWNER ONLY}",
    async execute(message, args) {
        if (message.author.id != 650432748275892253 && message.author.id != 175948123183644672 && message.author.id != 297686294086287360)
            message.channel.send(`:x: Tu n'as pas la permission de me redémarrer!`);
        else {
            msg2 = await message.channel.send(`<a:loader:811689262608941066> Redémarrage...`);
            client.destroy();
            client.login(config.BOT_TOKEN);
            console.log("Bot redémarré!")
            msg2.edit(":white_check_mark: Redémarré !");
        }
    },
}