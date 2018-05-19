const Discord = require("discord.js");
let users = require("../users.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) {
    let STR = Math.floor(Math.random() * 10) + 8;
    let DEX = Math.floor(Math.random() * 10) + 8;
    let CON = Math.floor(Math.random() * 10) + 8;
    let INT = Math.floor(Math.random() * 10) + 8;
    let WIS = Math.floor(Math.random() * 10) + 8;
    let CHA = Math.floor(Math.random() * 10) + 8;
    
    let HP = Math.floor(Math.random() * 40) + 40;
    
    let RRace = Math.floor(Math.random() * 7) + 1;
    let frace = '';
    
    if (RRace = 1) {
      frace = 'Human'
    }
    if (RRace = 2) {
      frace = 'Elf'
    }
    if (RRace = 3) {
      frace = 'Orc'
    }
    if (RRace = 4) {
      frace = 'Dragonborn'
    }
    if (RRace = 5) {
      frace = 'Dwarf'
    }
    if (RRace = 6) {
      frace = 'Gnome'
    }
    if (RRace = 7) {
      frace = 'Halfling'
    }
    if (RRace = 8) {
      frace = 'Half-Elf'
    }
    
    users[message.author.id] = {
      race: frace,
      hp: HP,
      lvl: 1,
      xp: 0,
      str: STR,
      dex: DEX,
      con: CON,
      int: INT,
      wis: WIS,
      cha: CHA
    }
    
    let userEmbed = new Discord.RichEmbed()
    .setThumbnail((message.author.displayAvatarURL))
    .setColor("#ecf0f1")
    .setDescription(`**Name:** ${message.author.username}\n**Race:** ${users[message.author.id].race}\n\n**Health:** ${users[message.author.id].hp}\n**Level:** ${users[message.author.id].lvl}\n**Experience:** ${users[message.author.id].xp}\n\n**Strength:** ${users[message.author.id].str}\n**Dexterity:** ${users[message.author.id].dex}\n**Contitution:** ${users[message.author.id].con}\n**Inteligence:** ${users[message.author.id].int}\n**Wisdom:** ${users[message.author.id].wis}\n**Charm:** ${users[message.author.id].cha}`)
    .setFooter(`${message.author.username} has been created successfully!`, message.author.displayAvatarURL);
    
    message.channel.send(userEmbed)
    return;
  } else {
    message.channel.send('You already created a user!');
    return;
  }
}

module.exports.help = {
  name: "create"
}
