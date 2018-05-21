const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!inv[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setDescription(`**🛒 __SHOP__ 🛒**\nApples 🍎 - 5 gold each. [#1161]\nGrapes 🍇 - 3 gold each. [#7181]\nTomatoes 🍅 - 5 gold each. [#2015]\nCorn 🌽 - 4 gold each. [#3151]\nEggs 🥚 - 5 gold each. [#5770]\nDaggers 🗡 - 100 gold each. [#4177]\nSwords ⚔ - 200 gold each. [#1923]\nMaces ✴ - 200 gold each. [#1313]\n\nTo buy one of the items from the shop, use `buy <item code>`. (Example: `buy #1923`)`);
  message.channel.send(botEmbed);
}

module.exports.help = {
  name: "shop"
}
