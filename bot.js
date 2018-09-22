const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setGame('v0.0.9')
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
  if(message.content.indexOf('Tier 5 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Mewtwo');
    message.channel.send(`A ${role1} Egg has appeared nearby and will be hatching soon!`);
  }
  else if(message.content.indexOf('Tier 4 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A Lv 4 Egg has appeared nearby ${role1}`);
  }
  else if(message.content.indexOf('Tier 3 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A Lv 3 Egg has appeared nearby ${role1}`);
  }
  else if(message.content.indexOf('Tier 2 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A Lv 2 Egg has appeared nearby ${role1}`);
  }
  else if(message.content.indexOf('Tier 1 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A Lv 1 Egg has appeared nearby ${role1}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Mewtwo') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Mewtwo');
    let role2 = message.channel.guild.roles.find('name', 'Bristol');
    let role3 = message.channel.guild.roles.find('name', 'Terryville');
    message.channel.send(`A ${role1} Raid has been posted. ${role2} ${role3}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Snorlax') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Snorlax');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Lapras') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lapras');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Rhydon') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Rhydon');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Golem') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Golem');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Alakazam') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Alakazam');
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`An ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Machamp') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Machamp');
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Hitmonlee') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Hitmonlee');
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Hitmonchan') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Hitmonchan');
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Scyther') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Scyther');
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Magneton') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Magneton');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Lickitung') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lickitung');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Electabuzz') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Electabuzz');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Magmar') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Magmar');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Bulbasaur') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Bulbasaur');
    let role2 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Charmander') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Charmander');
    let role2 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Squirtle') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Squirtle');
    let role2 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Magikarp') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Magikarp');
    let role2 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Dratini') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Dratini');
    let role2 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
});

bot.login(process.env.BOT_TOKEN);
