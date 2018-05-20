const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let item = args[0];
  if(!item) return message.channel.send("What do you want to eat? Let me know in the command! (Example: `eat egg`)");
  if (item === '') {
     (inv[message.author.id]. < 1)
      message.channel.send(`You do not own a ${item} which you can eat.`);
      return;
  }  
  }
}

module.exports.help = {
  name: "eat"
}
