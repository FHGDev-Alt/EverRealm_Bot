const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
	const em = new discord.RichEmbed()
	.setTitle('Everbot Help')
	.setDescription("What can I help you with?")
	.addField('Everyone', "Help\nPing\n")
	.addField("Moderators", "Kick\nMute\nRestart\nBan\n")
	.addField("Developer", "Eval\n")
	.setColor("RANDOM")
	.setTimestamp()
	message.channel.send({embed: em})
}

module.exports.help = {
	name: "help"
}
