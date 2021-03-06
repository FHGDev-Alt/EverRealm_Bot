const discord = require('discord.js')
const roblox = require('roblox-js')
const snekfetch = require('snekfetch')
const bot = new discord.Client()
const prefix = "e;"
// const {baselogger} = require('./logger.js')

bot.commands = new discord.Collection()

require('fs').readdir('./commands/', (err, files) => {
  if (err) console.error("Error loading files.");
  files.filter(f => f.split(".").pop() === "js").forEach((f,i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
  })
})

bot.on('ready', () => {
  console.log("Bot ready.")
  bot.user.setActivity(`over EverRealm Discord | e;help`)
  bot.guilds.forEach(async(ga, id) => {
    if (id !== "489745002604265483") return ga.leave()
  })
})

bot.on('guildCreate', (guild, id) => {
  if (id !== "489745002604265483") return guild.leave()
})

bot.on('message', message => {
  const mArray = message.content.split(" ");
  const args = mArray.slice(1)
  const com = mArray[0].slice(prefix.length)
  const cmd = bot.commands.get(com)
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (message.author.bot) return;
  
  if (cmd) {
    cmd.run(bot, message, args)
  }
})

bot.login(process.env.token)
