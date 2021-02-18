module.exports = {
    name: "version",
    description: "Affiche la version du bot",
    execute(message, args) {
        const version = require("./package.json");
        message.channel.send(`:robot: Je suis en version ${version.version}`);
    },
}