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
  if(message.content.toLowerCase().indexOf('Pyre Badge') > -1) {
    message.channel.send({embed: {
      color: 10038562,
      title: "Pyre Badge - Information",
      description: "Earn the Pyre Badge by defeating the Fire/Normal Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "Jamie / @jojopride"
      },
      {
        name: "Frontier Challenge",
        value: "To Be Announced."
      },
      ],
    }})
  }
  else if(message.content.toLowerCase().indexOf('essence') > -1) {
    message.channel.send({embed: {
      color: 3066993,
      title: "Essence Badge - Information",
      description: "Earn the Essence Badge by defeating the Grass/Bug Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "Jordon / @Jordon."
      },
      {
        name: "Frontier Challenge",
        value: "Great League Match | No Fire Type Pokemon or Moves Allowed!"
      },
      ],
    }})
  }
});

bot.login(process.env.BOT_TOKEN);
