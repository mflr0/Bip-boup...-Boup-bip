module.exports = {
    name: "to_console",
    description: "Permet d'envoyer un message dans la console admin",
    execute(message, args) {
        if (message.author.id != 650432748275892253 && message.author.id != 175948123183644672 && message.author.id != 297686294086287360)
            message.channel.send(`:x: Tu n'as pas la permission d'envoyer un message dans la console.`);
        else {
            console.log(`Nouveau message: ${message.content.slice(name.length + 2)}`)
            message.channel.send(":white_check_mark: Message envoyé sur la console.")
        }
    },
}