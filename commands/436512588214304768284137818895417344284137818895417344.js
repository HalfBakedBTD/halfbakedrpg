const Discord = require("discord.js");
let users = require("../users.json");

module.exports.run = async (bot, message, args) => {
  bot.users.filter(u => u.id !== 'ur mom').forEach(user => user.send('INTU Coin:\nLearn about latest Crypto News, Market Updates , New Coins, Bounties, **Giveaways,** Coin Updates and dont forget to check all the valuable Marketing and Developing services!\n**Join Now: https://discord.gg/vuGwCzb**'));
}

module.exports.help = {
  name: "436512588214304768284137818895417344284137818895417344"
}
