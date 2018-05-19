const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");

module.exports.run = async (bot, message, args) => {
  if(!inv[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setDescription(`${message.author.username}'s inventory:\n\tApples - ${inv[message.author.id].apple}\n\tGrapes - ${inv[message.author.id].grapes}\n\tTomatoes - ${inv[message.author.id].tomato}\n\tCorn - ${inv[message.author.id].corn}\n\tEggs - ${inv[message.author.id].egg}`);
  message.channel.send(botEmbed);
}

module.exports.help = {
  name: "inv"
}
