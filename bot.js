const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
  if(message.content.toLowerCase().indexOf('go in') > -1) {
    message.channel.send(`General Chat is not the place. Please use the private raid room.`);
  }
  else if(message.content.toLowerCase().indexOf('lists') > -1) {
    message.delete();
    message.channel.send(`Please visit #bt-updates for information on the current nests!`);
  }
});

bot.login(process.env.BOT_TOKEN);
