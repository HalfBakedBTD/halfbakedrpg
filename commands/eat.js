const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let item = args[0];
  if(!item) return message.channel.send("What do you want to eat? Let me know in the command! (Example: `eat egg`)");
  message.channel.send("You ate something...")
}

module.exports.help = {
  name: "eat"
}
