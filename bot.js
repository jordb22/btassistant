const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
  if(message.content.indexOf('Tier 5 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv5Raid');
    message.channel.send(`Hey! A ${role1} Egg is nearby!`);
  }
  else if(message.content.indexOf('Tier 4 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`Gear Up! A ${role1} Egg is nearby!`);
  }
  else if(message.content.indexOf('Tier 3 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`Heads up! A ${role1} Egg was just posted!`);
  }
  else if(message.content.indexOf('Tier 2 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`Check it out! A ${role1} Egg was just posted!`);
  }
  else if(message.content.indexOf('Tier 1 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`Gen 4 Sighting! A ${role1} Egg was just posted!`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Giratina') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Giratina');
    let role2 = message.channel.guild.roles.find('name', 'Lv5Raid');
    message.channel.send(`The Renegade Pokemon has appeared! ${role2}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Absol') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Absol');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`An ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Tyranitar') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Tyranitar');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Houndoom') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Aggron');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Marowak') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Marowak');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`An Alolan ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Togetic') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Gengar') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Sharpedo') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Machamp') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Granbull') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Sneasel') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Misdreavus') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Sableye') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Kirlia') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Kirlia');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Mawile') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Mawile');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Duskull') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Shuppet') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role2} has been posted.`);
  }
  else if(message.content.indexOf('Snorunt') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Shinx') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Shinx');
    let role2 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`Holy ${role1}! A Raid has been posted! ${role2}`);
  }
  else if(message.content.indexOf('Buizel') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Buizel');
    let role2 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`Woah! ${role1} is in a raid nearby! ${role2}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Liberty Tree') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'EX Gym');
    message.channel.send(`A Raid is taking place at an ${role1} soon.`);
  }
  else if(message.content.indexOf('Spanish War') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'EX Gym');
    message.channel.send(`A Raid is taking place at an ${role1} soon.`);
  }
});

bot.login(process.env.BOT_TOKEN);
