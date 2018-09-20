const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
 let member = message.mentions.members.first();
 let channel = message.channel
 let reason = args.slice(1).join(' ')
 let embed = new discord.RichEmbed()
 .setTitle(`${bot.user.username} Kick System`)
 .setDescription(`${member.user.username} was kicked for the reason ${reason}`)
 .setColor("RANDOM")
 
 if (!reason) {
  embed.setDescription(`${member.user.username} was successfully kicked.`)
 }
 
  if (message.member.hasPermission(["KICK_MEMBERS"])) {
   
    member.kick(reason).then(channel.send({ embed })).catch(err => {
      console.error(err)
    })
  } else {
    message.channel.send("You don't have permission to kick people. If there's someone who needs to be kicked, contact an administrator or a moderator.")
  } 
}

module.exports.help = {
  name: "kick",
  usage: "h!kick {@user} [reason]",
  information: "Kicks a mentioned user."
}
