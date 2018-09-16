const discord = require('discord.js')
const roblox = require('roblox-js')
const snekfetch = require('snekfetch')
const bot = new discord.Client()
const prefix = "e;"
// const {baselogger} = require('./logger.js')
const embed = new discord.RichEmbed()
.setTimestamp()
.setColor("RANDOM")

bot.commands = new discord.Collection()

fs.readdir('./commands/', (err, files) => {
  if (err) console.error("Error loading files.");
  files.filter(f => f.split(".").pop() === "js").forEach((f,i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
  })
})

bot.on('ready', () => {
  console.log("Bot ready.")
})

bot.on('message', message => {
  const mArray = message.content.split(" ");
  const args = mArray.slice(1)
  const com = mArray[0].slice(prefix.length)
  const cmd = bot.commands.get(com)
  
  if (cmd) {
    cmd.run(bot, message, args, prefix, embed)
  }
})

bot.login(process.env.botToken)
