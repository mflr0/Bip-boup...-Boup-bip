module.exports = {
	name: 'help',
    description: "Commande de help, affiche toutes les commandes disponibles sur le bot.",
    execute(message, args) {
        message.channel.send(`Voici la page d'aide, vous trouverez ici toutes les commandes qui seront ajoutées:`);
        message.channel.send(`$ping: permet de ping le bot.\n$coucou: Hello World.\n$say: fait parler le bot.\n$version: Permet d'obtenir la version du bot.`);
    },
}
