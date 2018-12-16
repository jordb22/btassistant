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
    let role1 = message.channel.guild.roles.find('name', 'Lv5Raid');
    message.channel.send(`The Renegade Pokemon has appeared! ${role1}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Absol') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Absol');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`An ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Exeggutor') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Marowak') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Marowak');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`An Alolan ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Aggron') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Raichu') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Raichu');
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`An Alolan ${role1} Raid has been posted.${role2}`);
  }
  else if(message.content.indexOf('Jolteon') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Scyther') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Skarmory') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Electabuzz') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Lanturn') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Manectric') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Mawile') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Mawile');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
});

bot.login(process.env.BOT_TOKEN);
