const Discord = require("discord.js");
let users = require("../users.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  
  let userEmbed = new Discord.RichEmbed()
  .setThumbnail((message.author.displayAvatarURL))
  .setColor('#27ae60')
  .setDescription(`**Name:** ${message.author.username}\n**Race:** ${users[message.author.id].race}\n\n**Health:** ${users[message.author.id].hp}/${users[message.author.id].maxhp}\n**Gold:** ${users[message.author.id].gold}\n**Level:** ${users[message.author.id].lvl}\n**Experience:** ${users[message.author.id].xp}\n\n**Strength:** ${users[message.author.id].str}\n**Dexterity:** ${users[message.author.id].dex}\n**Concentration:** ${users[message.author.id].con}\n**Inteligence:** ${users[message.author.id].int}\n**Wisdom:** ${users[message.author.id].wis}\n**Charm:** ${users[message.author.id].cha}\n\n**Quests:** ${users[message.author.id].quests}\n**Deaths:** ${users[message.author.id].deaths}`)
  
  message.channel.send(userEmbed)
}

module.exports.help = {
  name: "stats"
}
