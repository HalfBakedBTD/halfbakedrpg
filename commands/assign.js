const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let amount = args[0];
  let type = args[1];
  if(!amount) return message.channel.send("You have provided invalid arguments! Use the command by providing an amount of points to assign then provide what to assign it to. (Example: `assign 1 strength`)");
  if(!type) return message.channel.send("You have provided invalid arguments! Use the command by providing an amount of points to assign then provide what to assign it to. (Example: `assign 1 strength`)");
  if(!amount) return message.channel.send("You have provided invalid arguments! Use the command by providing an amount of points to assign then provide what to assign it to. (Example: `assign 1 strength`)");
  if(isNaN(args[0])) return message.channel.send("You have provided invalid arguments! Use the command by providing an amount of points to assign then provide what to assign it to. (Example: `assign 1 strength`)");
  if(parseInt(args[0]) < 1) return message.reply("you can't assign less than 1 point at  time!");
  if(parseInt(args[0]) > 10) return message.reply("you can't assign more than 10 points at  time!");
}

module.exports.help = {
  name: "assign"
}
