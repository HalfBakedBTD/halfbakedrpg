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
    
    let RRace = Math.floor(Math.random() * 9) + 1;
    let frace = '';
    let rdesc = '';
    
    if (RRace === 1) {
      frace = 'Human'
      STR = STR + 1
      DEX = DEX + 1
      CON = CON + 1
      INT = INT + 1
      WIS = WIS + 1
      CHA = CHA + 1
      rdesc = '+1 to all stats.'
    }
    if (RRace === 2) {
      frace = 'Elf'
      DEX = DEX + 2
      WIS = WIS + 1
      rdesc = '+2 to dexterity and +1 to wisdom.'
    }
    if (RRace === 3) {
      frace = 'Orc'
      STR = STR + 3
      rdesc = '+3 strength.'
    }
    if (RRace === 4) {
      frace = 'Dragonborn'
      STR = STR + 2
      CHA = CHA + 1
      rdesc = '+2 strength and +1 charm.'
    }
    if (RRace === 5) {
      frace = 'Dwarf'
      CON = CON + 2
      STR = STR + 1
      rdesc = '+2 constitution and +1 strength.'
    }
    if (RRace === 6) {
      frace = 'Gnome'
      INT = INT + 3
      rdesc = '+3 inteligence.'
    }
    if (RRace === 7) {
      frace = 'Half-Orc'
      STR = STR + 2
      CON = CON + 1
      rdesc = '+2 strength and +1 constitution.'
    }
    if (RRace === 8) {
      frace = 'Half-Elf'
      CHA = CHA + 2
      WIS = WIS + 1
      DEX = DEX + 1
      rdesc = '+2 charm, +1 wisdom, and +1 dexterity.'
    }
    if (RRace === 9) {
      frace = 'Goliath'
      STR = STR + 2
      CON = CON + 1
      rdesc = '+2 strength and +1 constitution.'
    }
    if (RRace === 10) {
      frace = 'Goliath'
      STR = STR + 2
      INT = INT + 1
      rdesc = '+2 strength and +1 inteligence.'
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
    .setDescription(`**Name:** ${message.author.username}\n**Race:** ${users[message.author.id].race}\nRace Perks: ${rdesc}\n\n**Health:** ${users[message.author.id].hp}\n**Level:** ${users[message.author.id].lvl}\n**Experience:** ${users[message.author.id].xp}\n\n**Strength:** ${users[message.author.id].str}\n**Dexterity:** ${users[message.author.id].dex}\n**Contitution:** ${users[message.author.id].con}\n**Inteligence:** ${users[message.author.id].int}\n**Wisdom:** ${users[message.author.id].wis}\n**Charm:** ${users[message.author.id].cha}`)
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
