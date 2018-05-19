const Discord = require("discord.js");
let users = require("../users.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.channel.send("Use 'create' to create a charecter before using `weapon` command!");
  let botEmbed = new Discord.RichEmbed()
  .setColor('#27ae60')
  .setDescription(`You are currently using ${users[message.author.id].weapon} in battles. You can obtain new weapons by killing the bosses.`);
  message.channel.send(botEmbed);
}

module.exports.help = {
  name: "weapon"
}
