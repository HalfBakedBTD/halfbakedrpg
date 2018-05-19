const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");

module.exports.run = async (bot, message, args) => {
  if(!inv[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setDescription(`**${message.author.username}'s inventory:**\n\tApples - ${inv[message.author.id].apple}\n\tGrapes - ${inv[message.author.id].grape}\n\tTomatoes - ${inv[message.author.id].tomato}\n\tCorn - ${inv[message.author.id].corn}\n\tEggs - ${inv[message.author.id].egg}\n\n\tFists - ${inv[message.author.id].fists}\n\tDaggers - ${inv[message.author.id].dagger}\n\tSwords - ${inv[message.author.id].sword}\n\tMaces - ${inv[message.author.id].mace}`);
  message.channel.send(botEmbed);
}

module.exports.help = {
  name: "inv"
}
