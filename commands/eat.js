const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  let item = args[0];
  if(!item) return message.channel.send("What do you want to eat? Let me know in the command! (Example: `eat egg`)");
  users[message.author.id].hp = users[message.author.id].hp + 10
  if (item === 'apple') {
    if (inv[message.author.id].apple < 1) {
      message.channel.send(`You do not own an ${item} which you can eat.`);
      return;
    }
    inv[message.author.id].apple = inv[message.author.id].apple - 1
    let HPG = Math.floor(Math.random() * 9) + 1;
    users[message.author.id].hp = users[message.author.id].hp + HPG
    message.reply(`you have just eaten a ${item}.`)
  } else if (item === 'corn') {
    if (inv[message.author.id].corn < 1) {
      message.channel.send(`You do not own a ${item} which you can eat.`);
      return;
    }
    inv[message.author.id].corn = inv[message.author.id].corn - 1
    let HPG = Math.floor(Math.random() * 9) + 1;
    users[message.author.id].hp = users[message.author.id].hp + HPG
    message.reply(`you have just eaten ${item}.`)
  } else if (item === 'grape') {
    if (inv[message.author.id].grape < 1) {
      message.channel.send(`You do not own a ${item} which you can eat.`);
      return;
    }
    inv[message.author.id].grape = inv[message.author.id].grape - 1
    let HPG = Math.floor(Math.random() * 6) + 1;
    users[message.author.id].hp = users[message.author.id].hp + HPG
    message.reply(`you have just eaten a ${item}.`)
  } else if (item === 'tomato') {
    if (inv[message.author.id].tomato < 1) {
      message.channel.send(`You do not own a ${item} which you can eat.`);
      return;
    }
    inv[message.author.id].tomato = inv[message.author.id].tomato - 1
    let HPG = Math.floor(Math.random() * 9) + 1;
    users[message.author.id].hp = users[message.author.id].hp + HPG
    message.reply(`you have just eaten a ${item}.`)
  } else if (item === 'egg') {
    if (inv[message.author.id].egg < 1) {
      message.channel.send(`You do not own an ${item} which you can eat.`);
      return;
    }
    inv[message.author.id].egg = inv[message.author.id].egg - 1
    let HPG = Math.floor(Math.random() * 9) + 1;
    users[message.author.id].hp = users[message.author.id].hp + HPG
    message.reply(`you have just eaten a ${item}.`)
  } else {
    message.reply(`you can't eat a ${item} because it doesn't exist in my files.`)
    return;
  }
  if (users[message.author.id].hp > users[message.author.id].maxhp) {
    users[message.author.id].hp = users[message.author.id].maxhp
  }
  message.channel.send(`[Health: ${users[message.author.id].hp}/${users[message.author.id].maxhp}]`)
}

module.exports.help = {
  name: "eat"
}
