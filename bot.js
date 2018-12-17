const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log(`Bot is online!\n${bot.users.size} users, in ${bot.guilds.size} servers connected.`);
});

bot.on("message", message => {
  if (message.author.bot) return;
  if(message.content.toLowerCase().indexOf('go in') > -1) {
    message.delete();
    let room1 = message.channel.guild.channels.find('id', '489200455658897408');
    message.channel.send(`Please use the private raid room. Visit ${room1} to find the room you need.`);
  }
  else if(message.content.toLowerCase().indexOf('nest list') > -1) {
    message.delete();
    let room1 = message.channel.guild.channels.find('id', '499423607999430656');
    message.channel.send(`Please visit ${room1} for information on the current nests!`);
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

bot.on("message", message => {
  if(message.content.toLowerCase().indexOf('pyre') > -1) {
    message.channel.send({embed: {
      color: 3447003,
      author: {
      name: bot.user.username,
      icon_url: bot.user.avatar
      },
      title: "This is an embed",
      url: "http://google.com",
      description: "This is a test embed to showcase what they look like and what they can do.",
      fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
      ],
      timestamp: new Date(),
      footer: {
      icon_url: bot.user.avatar,
      text: "© Example"
    }
    }})
  }
});

bot.login(process.env.BOT_TOKEN);
