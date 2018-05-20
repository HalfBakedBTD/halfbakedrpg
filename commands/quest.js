const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  if (monsters[message.author.id].name !== '') {
    let die = Math.floor(Math.random() * 5) + 1;
    let attackEval = users[message.author.id].str + users[message.author.id].con;
    let strength = attackEval / 5;
    let strengthR = Math.round(strength);
    let damage = die + strengthR;
    monsters[message.author.id].hp = monsters[message.author.id].hp - damage
    
    let dieM = Math.floor(Math.random() * 5) + 1;
    let attackEvalM = monsters[message.author.id].str + monsters[message.author.id].con;
    let strengthM = attackEvalM / 5;
    let strengthMR = Math.round(strengthM);
    let damageM = dieM + strengthMR;
    users[message.author.id].hp = users[message.author.id].hp - damageM
    
    let botEmbed = new Discord.RichEmbed()
    .setColor('#27ae60')
    .setDescription(`**Name:** ${message.author.username}\n**Health:** ${users[message.author.id].hp}/${users[message.author.id].maxhp}\n+dealt ${damage} damage.\n\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n-dealt ${damageM} damage.`)
    .setFooter(`${message.author.username}'s battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
    message.channel.send(botEmbed);
    
    if (monsters[message.author.id].hp < 1) {
      users[message.author.id].quests = users[message.author.id].quests + 1
      let dieGold = Math.floor(Math.random() * 5) + 1;
      dieGold = dieGold * users[message.author.id].lvl
      if (monsters[message.author.id].name === 'Black Dragon (BOSS #1)') {
        dieGold = dieGold + 140
      }
      if (monsters[message.author.id].name === 'Ancient Red Dragon (BOSS #2)') {
        dieGold = dieGold + 250
      }
      users[message.author.id].gold = users[message.author.id].gold + dieGold
      let dieXP = Math.floor(Math.random() * 5) + 5;
      if (monsters[message.author.id].name === 'Black Dragon (BOSS #1)') {
        dieXP = dieXP + 100
      }
      if (monsters[message.author.id].name === 'Ancient Red Dragon (BOSS #2)') {
        dieXP = dieXP + 180
      }
      users[message.author.id].xp = users[message.author.id].xp + dieXP
      let winEmbed = new Discord.RichEmbed()
      .setColor('#2ecc71')
      .setDescription(`**Quest Complete!**\n+${dieGold} gold.\n+${dieXP} expirience.\n+1 quests complete.`)
      .setFooter(`${message.author.username} has won the battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
      message.channel.send(winEmbed);
      monsters[message.author.id].name = ''
    }
    if (users[message.author.id].hp < 1) {
      users[message.author.id].deaths = users[message.author.id].deaths + 1
      let goldLoss = users[message.author.id].gold;
      users[message.author.id].gold = 0
      users[message.author.id].hp = users[message.author.id].maxhp
      let looseEmbed = new Discord.RichEmbed()
      .setColor('#e74c3c')
      .setDescription(`**Quest Failed!**\n+1 deaths.\n-${goldLoss} gold.`)
      .setFooter(`${message.author.username} has lost the battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
      message.channel.send(looseEmbed);
    }
    let lvl = users[message.author.id].lvl;
    let lvlUpXP = users[message.author.id].lvl * 50;
    if (users[message.author.id].xp > lvlUpXP) {
      users[message.author.id].lvl = users[message.author.id].lvl + 1
      users[message.author.id].xp = 0
      users[message.author.id].asp = users[message.author.id].asp + 4
      users[message.author.id].maxhp = users[message.author.id].maxhp * 2
      users[message.author.id].hp = users[message.author.id].maxhp
      message.channel.send(`${message.author.username} has leveled up and gained 4 assignable skill points!`)
    }
  } else {
    if (users[message.author.id].quests < 9) {
      let die = Math.floor(Math.random() * 5) + 1;
      if (die === 1) {
        monsters[message.author.id].name = 'Aarakocra'
        monsters[message.author.id].hp = 50
        monsters[message.author.id].maxhp = 50
        monsters[message.author.id].str = 9
        monsters[message.author.id].con = 11
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 2) {
        monsters[message.author.id].name = 'Aboleth'
        monsters[message.author.id].hp = 55
        monsters[message.author.id].maxhp = 55
        monsters[message.author.id].str = 11
        monsters[message.author.id].con = 11
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 3) {
        monsters[message.author.id].name = 'Innocent Creature'
        monsters[message.author.id].hp = 20
        monsters[message.author.id].maxhp = 20
        monsters[message.author.id].str = 2
        monsters[message.author.id].con = 2
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 4) {
        monsters[message.author.id].name = 'Abominable Yeti'
        monsters[message.author.id].hp = 40
        monsters[message.author.id].maxhp = 40
        monsters[message.author.id].str = 15
        monsters[message.author.id].con = 9
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 5) {
        monsters[message.author.id].name = 'Abyssal Wretch'
        monsters[message.author.id].hp = 52
        monsters[message.author.id].maxhp = 52
        monsters[message.author.id].str = 16
        monsters[message.author.id].con = 8
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 6) {
        monsters[message.author.id].name = 'Acererak'
        monsters[message.author.id].hp = 61
        monsters[message.author.id].maxhp = 61
        monsters[message.author.id].str = 8
        monsters[message.author.id].con = 8
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
    }
    if (users[message.author.id].quests === 9) {
      monsters[message.author.id].name = 'Black Dragon (BOSS #1)'
      monsters[message.author.id].hp = 140
      monsters[message.author.id].maxhp = 140
      monsters[message.author.id].str = 27
      monsters[message.author.id].con = 23
      let pickEmbed = new Discord.RichEmbed()
      .setColor('#7f8c8d')
      .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
      .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
      message.channel.send(pickEmbed);
      return;
    }
  if (users[message.author.id].quests < 19) {
    if (!users[message.author.id].quests > 10) return;
      let die = Math.floor(Math.random() * 5) + 1;
      if (die === 1) {
        monsters[message.author.id].name = 'Air Elemental'
        monsters[message.author.id].hp = 92
        monsters[message.author.id].maxhp = 92
        monsters[message.author.id].str = 14
        monsters[message.author.id].con = 20
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 2) {
        monsters[message.author.id].name = 'Albino Dwarf Worrior'
        monsters[message.author.id].hp = 99
        monsters[message.author.id].maxhp = 99
        monsters[message.author.id].str = 18
        monsters[message.author.id].con = 15
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 3) {
        monsters[message.author.id].name = 'Alhoon'
        monsters[message.author.id].hp = 121
        monsters[message.author.id].maxhp = 121
        monsters[message.author.id].str = 14
        monsters[message.author.id].con = 18
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 4) {
        monsters[message.author.id].name = 'Alkilith'
        monsters[message.author.id].hp = 118
        monsters[message.author.id].maxhp = 118
        monsters[message.author.id].str = 19
        monsters[message.author.id].con = 16
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 5) {
        monsters[message.author.id].name = 'Yusdrayl'
        monsters[message.author.id].hp = 102
        monsters[message.author.id].maxhp = 102
        monsters[message.author.id].str = 18
        monsters[message.author.id].con = 18
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 6) {
        monsters[message.author.id].name = 'Zaratan'
        monsters[message.author.id].hp = 114
        monsters[message.author.id].maxhp = 114
        monsters[message.author.id].str = 25
        monsters[message.author.id].con = 13
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
    }
    if (users[message.author.id].quests === 19) {
      monsters[message.author.id].name = 'Ancient Red Dragon (BOSS #2)'
      monsters[message.author.id].hp = 240
      monsters[message.author.id].maxhp = 240
      monsters[message.author.id].str = 32
      monsters[message.author.id].con = 28
      let pickEmbed = new Discord.RichEmbed()
      .setColor('#7f8c8d')
      .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
      .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
      message.channel.send(pickEmbed);
      return;
    }
  }
}

module.exports.help = {
  name: "quest"
}
