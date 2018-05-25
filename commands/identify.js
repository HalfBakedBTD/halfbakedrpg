const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let tUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!tUser) {
    if (message.author.id === '284137818895417344') {
      message.channel.send(`[<@${message.author.id}> - ADMIN]`)
    } else if (message.author.id === '275831434772742144') {
      message.channel.send(`[<@${message.author.id}> - ADMIN]`)
    } else {
      message.channel.send(`[<@${message.author.id}> - IRRELEVANT]`)
    }
  } else {
    if (tUser.id === '284137818895417344') {
      message.channel.send(`[${tUser} - ADMIN]`)
    } else if (tUser.id === '275831434772742144') {
      message.channel.send(`[${tUser} - ADMIN]`)
    } else {
      message.channel.send(`[${tUser} - IRRELEVANT]`)
    }
  }
}

module.exports.help = {
  name: "identify"
}
