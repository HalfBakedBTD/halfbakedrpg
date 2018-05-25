const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id === '284137818895417344') {
    message.channel.send(`[${message.author.username} - ADMIN]`)
  } else if (message.author.id === '275831434772742144') {
    message.channel.send(`[${message.author.username} - ADMIN]`)
  } else {
    message.channel.send(`[${message.author.username} - IRRELEVANT]`)
  }
}

module.exports.help = {
  name: "identify"
}
