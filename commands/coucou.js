module.exports = {
    name: "coucou",
    description: "Dit :wave: Hello World",
    execute(message, args) {
        message.channel.send(`:wave: Hello World`);
    },
}