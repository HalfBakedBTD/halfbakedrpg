const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
   //message.reply("\n💻 My Website: https://jasondw242.wixsite.com/rambunctious\n\n🏝 My server: https://discord.gg/REkAA2X\n\n⚙See my commands list at: https://jasondw242.wixsite.com/rambunctious/commands\n\n`WARNING` due to the sign up feature on the webpage some browsers have interperated it as a webpage to steal personal info. This is just a browser precaution so feel free to ignore it.");
    let botEmbed = new Discord.RichEmbed()
    .setColor('#27ae60')
    .setDescription("**My Commands:**\n`help` - shows this help thing...");
    message.channel.send(botEmbed);
}

module.exports.help = {
  name: "help"
}
