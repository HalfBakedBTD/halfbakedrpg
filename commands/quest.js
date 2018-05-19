const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  if (monsters[message.author.id].name !== '') {
    let die = Math.floor(Math.random() * 5) + 1;
    let attackEval = users[message.author.id].str + users[message.author.id].con;
    let strength = attackEval / 5;
    let strengthR = Math.round(strength);
    let damage = die + strengthR;
    monsters[message.author.id].hp = monsters[message.author.id].hp - damage
    
    let dieM = Math.floor(Math.random() * 5) + 1;
    let attackEvalM = monsters[message.author.id].str + monsters[message.author.id].con;
    let strengthM = attackEvalM / 5;
    let strengthMR = Math.round(strengthM);
    let damageM = dieM + strengthMR;
    users[message.author.id].hp = users[message.author.id].hp - damageM
    
    let botEmbed = new Discord.RichEmbed()
    .setColor('#27ae60')
    .setDescription(`**Name:** ${message.author.username}\n**Health:** ${users[message.author.id].hp}/${users[message.author.id].maxhp}\n+dealt ${die} damage.\n\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n-took ${dieM} damage.`)
    .setFooter(`${message.author.username}'s battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
    message.channel.send(botEmbed);
  }
}

module.exports.help = {
  name: "quest"
}
