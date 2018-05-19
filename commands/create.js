const Discord = require("discord.js");
let users = require("../users.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) {
    return;
  } else {
    message.channel.send('You already created a user!');
    return;
  }
}

module.exports.help = {
  name: "create"
}
