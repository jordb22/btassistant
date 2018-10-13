const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
  if(message.content.indexOf('Tier 5 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv5Raid');
    message.channel.send(`Great Ready! A ${role1} Egg is nearby!`);
  }
  else if(message.content.indexOf('Tier 4 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`Gear Up! A ${role1} Egg is nearby!`);
  }
  else if(message.content.indexOf('Tier 3 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`You Playing? A ${role1} Egg was just posted!`);
  }
  else if(message.content.indexOf('Tier 2 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`You Playing? A ${role1} Egg was just posted!`);
  }
  else if(message.content.indexOf('Tier 1 Egg') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`You Playing? A ${role1} Egg was just posted!`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Mewtwo') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Mewtwo');
    let role2 = message.channel.guild.roles.find('name', 'Lv5Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
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
    let role1 = message.channel.guild.roles.find('name', 'Houndoom');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Marowak') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Marowak');
    let role2 = message.channel.guild.roles.find('name', 'Lv4Raid');
    message.channel.send(`An Alolan ${role1} Raid has been posted. ${role2}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Alakazam') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Raichu') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Raichu');
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`An Alolan ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Starmie') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Jynx') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Claydol') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv3Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Slowbro') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Exeggutor') > -1) {
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role2} Raid has been posted.`);
  }
  else if(message.content.indexOf('Kirlia') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Kirlia');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
  else if(message.content.indexOf('Mawile') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Magmar');
    let role2 = message.channel.guild.roles.find('name', 'Lv2Raid');
    message.channel.send(`A ${role1} Raid has been posted. ${role2}`);
  }
});

bot.on("message", message => {
  if(message.content.indexOf('Wailmer') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Meditite') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Magikarp') > -1) {
    let role1 = message.channel.guild.roles.find('name', 'Lv1Raid');
    message.channel.send(`A ${role1} has been posted.`);
  }
  else if(message.content.indexOf('Drowzee') > -1) {
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
});

bot.login(process.env.BOT_TOKEN);
