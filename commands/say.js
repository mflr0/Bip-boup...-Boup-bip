module.exports = {
	name: "say",
    description: "Donnez une phrase a dire au bot",
    execute(message, args) {
        if (args.length >= 1) {
            message.channel.send(`${message.content.slice(name.length + 2)}`);
            message.delete();
        } else {
            message.channel.send(`:x: Je peux pas deviner ce que tu veux que je dise`);
        }
    },
}