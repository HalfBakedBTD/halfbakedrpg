const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
   //message.reply("\n💻 My Website: https://jasondw242.wixsite.com/rambunctious\n\n🏝 My server: https://discord.gg/REkAA2X\n\n⚙See my commands list at: https://jasondw242.wixsite.com/rambunctious/commands\n\n`WARNING` due to the sign up feature on the webpage some browsers have interperated it as a webpage to steal personal info. This is just a browser precaution so feel free to ignore it.");
    let botEmbed = new Discord.RichEmbed()
    .setColor('#27ae60')
    .setDescription("**My Commands:**\n`help` - shows this help thing...\n`create` - allows you to create an all new charecter.\n`quest` - gives quests.\n\n`shop` - shows items which are avaliable to buy.\n`buy` - lets you buy items from the shop.\n`equipt` - lets you equipt items for battle.\n\n`stats` - shows your player stats.\n`assign` - lets you assign skill points.\n`inv` - shows your invantory.\n`eat` - lets you eat giving health.\n\n`randchar` - generates random charecter stats. (No effect on your charecter.)\n`weapon` - shows current weapon.\n`forage` - allows you to find food every 2 minutes.");
    message.channel.send(botEmbed);
}

module.exports.help = {
  name: "help"
}
