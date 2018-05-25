const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id === '284137818895417344') {
    message.channel.send(`${message.author.username}, you are an admin.`)
  } else if (message.author.id === '275831434772742144') {
    message.channel.send(`${message.author.username}, you are an admin.`)
  } else {
    message.channel.send(`${message.author.username}, you are irrelevant.`)
  }
}

module.exports.help = {
  name: "inv"
}
