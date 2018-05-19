const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  if (monsters[message.author.id].name !== '') {
    let botEmbed = new Discord.RichEmbed()
    .setColor('#27ae60')
    .setDescription(`**Name:** ${users[message.author.id].name}\n**Health:** ${users[message.author.id].hp}/${users[message.author.id].maxhp}\n\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}`); 
    message.channel.send(botEmbed);
  }
}

module.exports.help = {
  name: "quest"
}
