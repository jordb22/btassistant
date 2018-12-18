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
   if(message.content.toLowerCase().indexOf('quarry') > -1) {
    message.channel.send({embed: {
      color: 12745742,
      title: "Quarry Badge - Information",
      description: "Earn the Quarry Badge by defeating the Rock/Ground Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-1.discordapp.net/external/Xg9G20OWNyRz-3mNjN3lzRZCfLQu0huQr8nZqjNokDU/https/assets.pokenavbot.com/images/badge/cad72a8e2dc0bbafc03638a3a01ceb449c8ced4cd10f92ce49d010c8.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "George | @Yorgie18",
        inline: true
      },
      {
        name: "PVP League",
        value: "Great",
        inline: true
      },
      {
        name: "Frontier Challenge",
        value: "No Starter Family Pokemon Allowed!",
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
        value: "Jordon | @Jordon"
      },
      {
        name: "Frontier Challenge",
        value: "Great League Match | No Fire Type Pokemon or Moves Allowed!"
      },
      ],
    }})
  }
  else if(message.content.toLowerCase().indexOf('dynamic') > -1) {
    message.channel.send({embed: {
      color: 15844367,
      title: "Dynamic Badge - Information",
      description: "Earn the Dynamic Badge by defeating the Electric/Steel Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "John | @John&Bekka"
      },
      {
        name: "Frontier Challenge",
        value: "Great League Match | No Stage 2 Pokemon Allowed!"
      },
      ],
    }})
  }
  else if(message.content.toLowerCase().indexOf('revenant') > -1) {
    message.channel.send({embed: {
      color: 7419530,
      title: "Revenant Badge - Information",
      description: "Earn the Revenant Badge by defeating the Ghost/Poison Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "Tyler | @SirTyler7"
      },
      {
        name: "Frontier Challenge",
        value: "Ultra League Match | No Evolved Pokemon Allowed!"
      },
      ],
    }})
  }
  else if(message.content.toLowerCase().indexOf('hail') > -1) {
    message.channel.send({embed: {
      color: 3447003,
      title: "Hail Badge - Information",
      description: "Earn the Hail Badge by defeating the Water/Ice Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "Easton | @Something Reinhardt"
      },
      {
        name: "Frontier Challenge",
        value: "Ultra League Match | To Be Announced."
      },
      ],
    }})
  }
  else if(message.content.toLowerCase().indexOf('nightmare') > -1) {
    message.channel.send({embed: {
      color: 9807270,
      title: "Nightmare Badge - Information",
      description: "Earn the Nightmare Badge by defeating the Dark/Fighting Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "Joe | @Rogue"
      },
      {
        name: "Frontier Challenge",
        value: "Ultra League Match | No Fighting Type Pokemon."
      },
      ],
    }})
  }
  else if(message.content.toLowerCase().indexOf('pyre') > -1) {
    message.channel.send({embed: {
      color: 10038562,
      title: "Pyre Badge - Information",
      description: "Earn the Pyre Badge by defeating the Fire/Normal Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "Jamie | @jojopride"
      },
      {
        name: "Frontier Challenge",
        value: "Master League Match | To Be Announced."
      },
      ],
    }})
  }
  else if(message.content.toLowerCase().indexOf('aerial') > -1) {
    message.channel.send({embed: {
      color: 1752220,
      title: "Aerial Badge - Information",
      description: "Earn the Aerial Badge by defeating the Dragon/Flying Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "Roger | @RogerAK"
      },
      {
        name: "Frontier Challenge",
        value: "Master League Match | No Legendary Pokemon Allowed!"
      },
      ],
    }})
  }
  else if(message.content.toLowerCase().indexOf('fantasy') > -1) {
    message.channel.send({embed: {
      color: 10181046,
      title: "Fantasy Badge - Information",
      description: "Earn the Fantasy Badge by defeating the Psychic/Fairy Frontier Brain in their Frontier Challenge!",
      fields: [{
        name: "Current Frontier Brain",
        value: "*???* | @Totalchaos71"
      },
      {
        name: "Frontier Challenge",
        value: "Master League Match | To Be Announced."
      },
      ],
    }})
  }
});

bot.login(process.env.BOT_TOKEN);
