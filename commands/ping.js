module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
        const timeTaken = Date.now() - message.createdTimestamp;
		message.channel.send(`:ping_pong: Pong! Ce message a une latence de ${timeTaken}ms.`);
	},
};