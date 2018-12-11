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
    message.channel.send(`A ${role1} Egg was just posted!`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Cresselia') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv5Raid');
    message.channel.send(`The Lunar Pokemon has appeared! ${role1}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Absol') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Houndoom') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Marowak') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Tyranitar') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Raichu') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Machamp') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Scyther') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Gengar') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Pinsir') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Sharpedo') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Misdreavus') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Sneasel') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Sableye') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Mawile') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Shuppet') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Duskull') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Shinx') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Buizel') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Snorunt') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Drifloon') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
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
  else if(message.content.indexOf('Plainville Fire') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'NortonEX');
    message.channel.send(`A Raid at Norton Park has appeared! ${role1}`);
  }
  else if(message.content.indexOf('Farmington Canal') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'NortonEX');
    message.channel.send(`A Raid at Norton Park has appeared! ${role1}`);
  }
  else if(message.content.indexOf('41.658491') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'NortonEX');
    message.channel.send(`A Raid at Norton Park has appeared! ${role1}`);
  }
});

bot.login(process.env.BOT_TOKEN);
