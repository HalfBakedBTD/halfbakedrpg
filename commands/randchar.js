const Discord = require("discord.js");
let users = require("../users.json");

module.exports.run = async (bot, message, args) => {
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
    
    let userEmbed = new Discord.RichEmbed()
    .setThumbnail((message.author.displayAvatarURL))
    .setColor(`${rcol}`)
    .setDescription(`**Name:** Random Charecter\n**Race:** ${frace}\n**Race Perks:** ${rdesc}\n\n**Health:** ${HP}\n**Level:** N/A\n**Experience:** N/A\n\n**Strength:** ${STR}\n**Dexterity:** ${DEX}\n**Concentration:** ${CON}\n**Inteligence:** ${INT}\n**Wisdom:** ${WIS}\n**Charm:** ${CHA}`)
    .setFooter(`Random Charecter has been created successfully!`, message.author.displayAvatarURL);
    
    message.channel.send(userEmbed)
    return;
}

module.exports.help = {
  name: "randchar"
}
