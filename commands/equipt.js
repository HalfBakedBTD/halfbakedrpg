const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
//5005nji5g4wnjifsnjen7tf4ionhi7drsj4
module.exports.run = async (bot, message, args) => {
  if(!inv[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let item = args[0];
  let mau = message.author.username;
  let mai = message.author.id;
  if(!item) return message.channel.send(`${mau}, you need to tell me what you want to equipt. (Example: \`equipt sword\`)`);
  if(item === users[mai].weapon) return message.channel.send(`${mau}, ${item} is already equipt.`);
  if (item === 'fists') {
    if(inv[mai].fists < 1) return message.channel.send(`${mau}, you can't equipt this item because you don't own it.`);
    users[mai].weapon = 'fists'
    message.channel.send(`${mau}, you have successfully equipt a ${item}.`)
  } else if (item === 'sword') {
    if(inv[mai].sword < 1) return message.channel.send(`${mau}, you can't equipt this item because you don't own it.`);
    users[mai].weapon = 'sword'
    message.channel.send(`${mau}, you have successfully equipt a ${item}.`)
  } else if (item === 'dagger') {
    if(inv[mai].dagger < 1) return message.channel.send(`${mau}, you can't equipt this item because you don't own it.`);
    users[mai].weapon = 'dagger'
    message.channel.send(`${mau}, you have successfully equipt a ${item}.`)
  } else if (item === 'mace') {
    if(inv[mai].mace < 1) return message.channel.send(`${mau}, you can't equipt this item because you don't own it.`);
    users[mai].weapon = 'mace'
    message.channel.send(`${mau}, you have successfully equipt a ${item}.`)
  } else {
    message.channel.send(`${mau}, a ${item} doesn't exist in my files.`)
    return;
  }
}

module.exports.help = {
  name: "equipt"
}
