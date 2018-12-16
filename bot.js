const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
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
