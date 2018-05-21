const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");

module.exports.run = async (bot, message, args) => {
  if(!inv[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let item = args[0];
  let mai = message.author.id;
  let inv = inv[message.author.id];
  let mau = message.author.username;
  if(!item) return message.channel.send(`${mau}, you have used the command wrong. Tell me what you want to buy. (Example: \`buy #1161\`)`)
  if (item === '#1161') {
    if(users[message.author.id].gold < 5) return message.channel.send(`${mau}, you cant afford to buy this item.`)
    inv.apple = inv.apple + 1
    users[message.author.id].gold = users[message.author.id].gold - 5
    message.channel.send(`${mau}, you have just bought an apple.`)
  } else if (item === '#7181') {
    if(users[message.author.id].gold < 3) return message.channel.send(`${mau}, you cant afford to buy this item.`)
    inv.grape = inv.grape + 1
    users[message.author.id].gold = users[message.author.id].gold - 3
    message.channel.send(`${mau}, you have just bought a grape.`)
  } else if (item === '#2015') {
    if(users[message.author.id].gold < 5) return message.channel.send(`${mau}, you cant afford to buy this item.`)
    inv.tomato = inv.tomato + 1
    users[message.author.id].gold = users[message.author.id].gold - 5
    message.channel.send(`${mau}, you have just bought a tomato.`)
  } else if (item === '#3151') {
    if(users[message.author.id].gold < 4) return message.channel.send(`${mau}, you cant afford to buy this item.`)
    inv.corn = inv.corn + 1
    users[message.author.id].gold = users[message.author.id].gold - 4
    message.channel.send(`${mau}, you have just bought a corn.`)
  } else if (item === '#5771') {
    if(users[message.author.id].gold < 5) return message.channel.send(`${mau}, you cant afford to buy this item.`)
    inv.egg = inv.egg + 1
    users[message.author.id].gold = users[message.author.id].gold - 5
    message.channel.send(`${mau}, you have just bought an egg.`)
  } else if (item === '#4177') {
    if(users[message.author.id].gold < 100) return message.channel.send(`${mau}, you cant afford to buy this item.`)
    inv.dagger = inv.dagger + 1
    users[message.author.id].gold = users[message.author.id].gold - 100
    message.channel.send(`${mau}, you have just bought a dagger.`)
  } else if (item === '#1923') {
    if(users[message.author.id].gold < 200) return message.channel.send(`${mau}, you cant afford to buy this item.`)
    inv.sword = inv.sword + 1
    users[message.author.id].gold = users[message.author.id].gold - 200
    message.channel.send(`${mau}, you have just bought a sword.`)
  } else if (item === '#1313') {
    if(users[message.author.id].gold < 200) return message.channel.send(`${mau}, you cant afford to buy this item.`)
    inv.mace = inv.mace + 1
    users[message.author.id].gold = users[message.author.id].gold - 200
    message.channel.send(`${mau}, you have just bought a mace.`)
  } else {
    message.channel.send(`You cannot buy an item with this id!`)
    return;
  }
}

module.exports.help = {
  name: "buy"
}
