const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You don't have permission to ban people. If there's someone who needs to be banned, contact an administrator or a moderator.")
    let reason = args.slice(1).join(" ");
    let member = message.mentions.members.first();
    member.ban(reason).catch(console.error)
    let embed = new discord.RichEmbed()
    .setTitle("Everbot Banning")
    .setDescription(`:wave: Successfully Banned ${member.displayName} :point_right:`)
    .setColor("RED")
    .setThumbnail(bot.user.avatarURL)
    message.channel.send({embed})
}

module.exports.help = {
  name: "ban"
}
