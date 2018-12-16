const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
  if(message.content.indexOf('Go In') > -1) {
    message.channel.send(`Raid discussions should take place in the private raid channels! Please find the channel using Active Raids.`);
  }
});

bot.login(process.env.BOT_TOKEN);
