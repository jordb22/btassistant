const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
  if (message.author.bot) return;
  if(message.content.toLowerCase().indexOf('go in') > -1) {
    message.delete();
    message.channel.send(`General Chat is not the place. Please use the private raid room.`);
  }
  else if(message.content.toLowerCase().indexOf('nest list') > -1) {
    message.delete();
    let message = `Make sure to check the current nest list at ${message.guild.channels.get('499423607999430656').toString()}`;
  }
  else if(message.content.toLowerCase().indexOf('spoofing') > -1) {
    message.delete();
    message.channel.send(`I've heard special Trainers in the Hoenn Region fly on the backs of Latios and Latias in order to travel!`);
  }
  else if(message.content.toLowerCase().indexOf('spoof') > -1) {
    message.delete();
    message.channel.send(`Those Sableye are always playing tricks around here! Watch out!`);
  }
  else if(message.content.toLowerCase().indexOf('bot triggers') > -1) {
    message.delete();
    message.channel.send(`I respond to ~go in~ ~nest list~ ~spoofing~ and ~spoof~ at this time.`);
  }
});

bot.login(process.env.BOT_TOKEN);
