const discord = require('discord.js')
module.exports.run = (bot, message, args) => {
let em = new discord.RichEmbed()
.setTitle("Everbot Restarting...")
.setDescription(":wave: Restarting...")
.setTimestamp()
.setColor("RANDOM")
let embed = new discord.RichEmbed()
.setTitle("Everbot Restarted!")
.setDescription(":thumbsup: Everbot Successfully Restarted.")
.setThumbnail(bot.user.avatarURL)
.setTimestamp()
.setColor("RANDOM")

  function restart(channel) {
    channel.send({embed: em})
    .then(m => m.delete(5000))
    .then(() => bot.destroy())
    .then(() => bot.login(process.env.token))
    .catch(err => console.error(err))
    .then(() => message.channel.send({embed: embed}))
  }
  
  restart(message.channel)
}

module.exports.help = {
  name: "restart"
}
