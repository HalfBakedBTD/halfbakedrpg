const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

const claim_cooldown_time = 120;
const claim_talked_users = new Set();

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  if (claim_talked_users.has(message.author.id)) return message.reply("you have to wait before foraging again. (2M Cooldown.)");
  let die = Math.floor(Math.random() * 4) + 1;
  let amount = Math.floor(Math.random() * 3) + 2;
  if (die === 1) {
    inv[message.author.id].apple = inv[message.author.id].apple + amount
    message.channel.send(`🌲 You went foraging and found ${amount} apples! 🌴`);
  }
  if (die === 2) {
    inv[message.author.id].grape = inv[message.author.id].grape + amount
    message.channel.send(`🌲 You went foraging and found ${amount} grapes! 🌴`);
  }
  if (die === 3) {
    inv[message.author.id].tomato = inv[message.author.id].tomato + amount
    message.channel.send(`🌲 You went foraging and found ${amount} tomatoes! 🌴`);
  }
  if (die === 4) {
    inv[message.author.id].corn = inv[message.author.id].corn + amount
    message.channel.send(`🌲 You went foraging and found ${amount} corns! 🌴`);
  }
  if (die === 5) {
    inv[message.author.id].egg = inv[message.author.id].egg + amount
    message.channel.send(`🌲 You went foraging and found ${amount} eggs! 🌴`);
  }
  claim_talked_users.add(message.author.id);
    setTimeout(() => {
      claim_talked_users.delete(message.author.id);
    }, claim_cooldown_time * 1000);
}

module.exports.help = {
  name: "forage"
}
