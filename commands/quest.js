const Discord = require("discord.js");
let users = require("../users.json");
let inv = require("../inv.json");
let monsters = require("../monsters.json");

module.exports.run = async (bot, message, args) => {
  if(!users[message.author.id]) return message.reply("Please use 'create' to make a charecter before using this command!");
  if (monsters[message.author.id].name !== '') {
    let die = Math.floor(Math.random() * 5) + 1;
    if (users[message.author.id].weapon === 'fists') {
      die = die + 1
    }
    if (users[message.author.id].weapon === 'dagger') {
      die = die + 2
    }
    if (users[message.author.id].weapon === 'sword') {
      die = die + 4
    }
    if (users[message.author.id].weapon === 'mace') {
      die = die + 4
    }
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
      if (monsters[message.author.id].name === 'Ancient Brass Dragon (BOSS #3)') {
        dieGold = dieGold + 600
      }
      users[message.author.id].gold = users[message.author.id].gold + dieGold
      let dieXP = Math.floor(Math.random() * 5) + 5;
      if (monsters[message.author.id].name === 'Black Dragon (BOSS #1)') {
        dieXP = dieXP + 100
      }
      if (monsters[message.author.id].name === 'Ancient Red Dragon (BOSS #2)') {
        dieXP = dieXP + 180
      }
      if (monsters[message.author.id].name === 'Ancient Brass Dragon (BOSS #3)') {
        dieXP = dieXP + 800
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
  if (users[message.author.id].quests < 49) {
    if (!users[message.author.id].quests > 19) return;
      let die = Math.floor(Math.random() * 10) + 1;
      if (die === 1) {
        monsters[message.author.id].name = 'Astral Dreadnaught'
        monsters[message.author.id].hp = 400
        monsters[message.author.id].maxhp = 400
        monsters[message.author.id].str = 42
        monsters[message.author.id].con = 38
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 2) {
        monsters[message.author.id].name = 'Atropal'
        monsters[message.author.id].hp = 340
        monsters[message.author.id].maxhp = 340
        monsters[message.author.id].str = 40
        monsters[message.author.id].con = 40
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 3) {
        monsters[message.author.id].name = 'Banderhobb'
        monsters[message.author.id].hp = 280
        monsters[message.author.id].maxhp = 280
        monsters[message.author.id].str = 50
        monsters[message.author.id].con = 21
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 4) {
        monsters[message.author.id].name = 'Banshee'
        monsters[message.author.id].hp = 380
        monsters[message.author.id].maxhp = 380
        monsters[message.author.id].str = 42
        monsters[message.author.id].con = 50
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 5) {
        monsters[message.author.id].name = 'Baphomet'
        monsters[message.author.id].hp = 480
        monsters[message.author.id].maxhp = 480
        monsters[message.author.id].str = 60
        monsters[message.author.id].con = 34
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 6) {
        monsters[message.author.id].name = 'Barbed Devil'
        monsters[message.author.id].hp = 200
        monsters[message.author.id].maxhp = 200
        monsters[message.author.id].str = 102
        monsters[message.author.id].con = 89
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 7) {
        monsters[message.author.id].name = 'Barlgura'
        monsters[message.author.id].hp = 400
        monsters[message.author.id].maxhp = 400
        monsters[message.author.id].str = 78
        monsters[message.author.id].con = 89
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 8) {
        monsters[message.author.id].name = 'Barovian Witch'
        monsters[message.author.id].hp = 280
        monsters[message.author.id].maxhp = 280
        monsters[message.author.id].str = 152
        monsters[message.author.id].con = 74
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 9) {
        monsters[message.author.id].name = 'Barlgura'
        monsters[message.author.id].hp = 400
        monsters[message.author.id].maxhp = 400
        monsters[message.author.id].str = 78
        monsters[message.author.id].con = 89
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 10) {
        monsters[message.author.id].name = 'Blagothkus'
        monsters[message.author.id].hp = 720
        monsters[message.author.id].maxhp = 720
        monsters[message.author.id].str = 120
        monsters[message.author.id].con = 12
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
      if (die === 11) {
        monsters[message.author.id].name = 'Chimera'
        monsters[message.author.id].hp = 400
        monsters[message.author.id].maxhp = 400
        monsters[message.author.id].str = 92
        monsters[message.author.id].con = 78
        let pickEmbed = new Discord.RichEmbed()
        .setColor('#7f8c8d')
        .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
        .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
        message.channel.send(pickEmbed);
        return;
      }
    }
    if (users[message.author.id].quests === 49) {
      monsters[message.author.id].name = 'Ancient Brass Dragon (BOSS #3)'
      monsters[message.author.id].hp = 20000
      monsters[message.author.id].maxhp = 20000
      monsters[message.author.id].str = 483
      monsters[message.author.id].con = 601
      let pickEmbed = new Discord.RichEmbed()
      .setColor('#7f8c8d')
      .setDescription(`**__Quest Found!__**\n**Opponent:** ${monsters[message.author.id].name}\n**Health:** ${monsters[message.author.id].hp}/${monsters[message.author.id].maxhp}\n**Strength:** ${monsters[message.author.id].str}\n**Concentration:** ${monsters[message.author.id].con}`)
      .setFooter(`${message.author.username} has been selected to battle against ${monsters[message.author.id].name}.`, message.author.displayAvatarURL);
      message.channel.send(pickEmbed);
      return;
    }
    if (users[message.author.id].quests > 49) {
      monsters[message.author.id].hp = 50 * users[message.author.id].quests
      monsters[message.author.id].maxhp = monsters[message.author.id].hp
      let strM = Math.floor(Math.random() * 9) - 5;
      let conM = Math.floor(Math.random() * 9) - 5;
      monsters[message.author.id].str = users[message.author.id].str + strM
      monsters[message.author.id].con = users[message.author.id].con + conM
      let die = Math.floor(Math.random() * 20) + 1;
      if (die === 1) {
        monsters[message.author.id].name = 'Shull'
      }
      if (die === 2) {
        monsters[message.author.id].name = 'Shull Spore Servant'
      }
      if (die === 3) {
        monsters[message.author.id].name = 'Clay Golem'
      }
      if (die === 4) {
        monsters[message.author.id].name = 'Cloaker'
      }
      if (die === 5) {
        monsters[message.author.id].name = 'Chwinga'
      }
      if (die === 6) {
        monsters[message.author.id].name = 'Clound Giant'
      }
      if (die === 7) {
        monsters[message.author.id].name = 'Cockatrice'
      }
      if (die === 8) {
        monsters[message.author.id].name = 'Crushing Wave Priest'
      }
      if (die === 9) {
        monsters[message.author.id].name = 'Cult Fanatic'
      }
      if (die === 10) {
        monsters[message.author.id].name = 'Cultist'
      }
      if (die === 11) {
        monsters[message.author.id].name = 'Cyclops'
      }
      if (die === 12) {
        monsters[message.author.id].name = 'Dao'
      }
      if (die === 13) {
        monsters[message.author.id].name = 'Darkling'
      }
      if (die === 14) {
        monsters[message.author.id].name = 'Death Dog'
      }
      if (die === 15) {
        monsters[message.author.id].name = 'Deathlock Mastermind'
      }
      if (die === 16) {
        monsters[message.author.id].name = 'Decapus'
      }
      if (die === 17) {
        monsters[message.author.id].name = 'Dragonclaw'
      }
      if (die === 18) {
        monsters[message.author.id].name = 'Droki'
      }
      if (die === 19) {
        monsters[message.author.id].name = 'Drow'
      }
      if (die === 20) {
        monsters[message.author.id].name = 'Dybukk'
      }
      if (die === 21) {
        monsters[message.author.id].name = 'Eblis'
      }
      
    }
  }
}

module.exports.help = {
  name: "quest"
}
