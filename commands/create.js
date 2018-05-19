const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) {
    let STR = Math.floor(Math.random() * 10) + 8;
    let DEX = Math.floor(Math.random() * 10) + 8;
    let CON = Math.floor(Math.random() * 10) + 8;
    let INT = Math.floor(Math.random() * 10) + 8;
    let WIS = Math.floor(Math.random() * 10) + 8;
    let CHA = Math.floor(Math.random() * 10) + 8;
    
    let HP = Math.floor(Math.random() * 40) + 40;
    let GOLD = Math.floor(Math.random() * 60) + 40;
    
    let RRace = Math.floor(Math.random() * 9) + 1;
    let frace = '';
    let rdesc = '';
    let rcol = '#ecf0f1';
    
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
      rcol = '#27ae60'
    }
    if (RRace === 3) {
      frace = 'Orc'
      STR = STR + 3
      rdesc = '+3 strength.'
      rcol = '#2c3e50'
    }
    if (RRace === 4) {
      frace = 'Dragonborn'
      STR = STR + 2
      CHA = CHA + 1
      rdesc = '+2 strength and +1 charm.'
      rcol = '#c0392b'
    }
    if (RRace === 5) {
      frace = 'Dwarf'
      CON = CON + 2
      STR = STR + 1
      rdesc = '+2 constitution and +1 strength.'
      rcol = '#f1c40f'
    }
    if (RRace === 6) {
      frace = 'Gnome'
      INT = INT + 3
      rdesc = '+3 inteligence.'
      rcol = '#3498db'
    }
    if (RRace === 7) {
      frace = 'Half-Orc'
      STR = STR + 2
      CON = CON + 1
      rdesc = '+2 strength and +1 constitution.'
      rcol = '#EA2027'
    }
    if (RRace === 8) {
      frace = 'Half-Elf'
      CHA = CHA + 2
      WIS = WIS + 1
      DEX = DEX + 1
      rdesc = '+2 charm, +1 wisdom, and +1 dexterity.'
      rcol = '#C4E538'
    }
    if (RRace === 9) {
      frace = 'Goliath'
      STR = STR + 2
      CON = CON + 1
      rdesc = '+2 strength and +1 constitution.'
      rcol = '#6F1E51'
    }
    if (RRace === 10) {
      frace = 'Tiefling'
      STR = STR + 2
      INT = INT + 1
      rdesc = '+2 strength and +1 inteligence.'
      rcol = '#8e44ad'
    }
    
    users[message.author.id] = {
      race: frace,
      hp: HP,
      hex: rcol,
      lvl: 1,
      xp: 0,
      gold: GOLD,
      weapon: 'fists',
      quests: 0,
      str: STR,
      dex: DEX,
      con: CON,
      int: INT,
      wis: WIS,
      cha: CHA
    }
    
    inv[message.author.id] = {
      apple: 0,
      grape: 0,
      tomato: 0,
      corn: 0,
      egg: 0,
      fists: 2,
      dagger: 0,
      sword: 0,
      mace: 0
    }
    
    let userEmbed = new Discord.RichEmbed()
    .setThumbnail((message.author.displayAvatarURL))
    .setColor(`${rcol}`)
    .setDescription(`**Name:** ${message.author.username}\n**Race:** ${users[message.author.id].race}\n**Race Perks:** ${rdesc}\n\n**Health:** ${users[message.author.id].hp}\n**Gold:** ${GOLD}\n**Level:** ${users[message.author.id].lvl}\n**Experience:** ${users[message.author.id].xp}\n\n**Strength:** ${users[message.author.id].str}\n**Dexterity:** ${users[message.author.id].dex}\n**Concentration:** ${users[message.author.id].con}\n**Inteligence:** ${users[message.author.id].int}\n**Wisdom:** ${users[message.author.id].wis}\n**Charm:** ${users[message.author.id].cha}`)
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
