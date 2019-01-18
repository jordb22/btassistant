/*jshint esversion: 6 */
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
  if(message.content.indexOf('ping') > -1) {
    message.channel.send('pong'`);
  }
});

bot.login(process.env.BOT_TOKEN);
