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
});

bot.on("message", message => {
   if(message.content.toLowerCase().indexOf('1288') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 12745742,
      title: "Quarry Badge - Information",
      description: "Earn the Quarry Badge by defeating the Rock/Ground Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-2.discordapp.net/external/4ceJO0D4P-e9zIFHIwRH5dw9eHi0D7jRZtGX5e8mheg/https/assets.pokenavbot.com/images/badge/3c7f4afc9f8513e2c34b32b2be25ab58f9dac83f2d256d2d9888c753.png"
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
    }});
  }
  else if(message.content.toLowerCase().indexOf('1290') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 15844367,
      title: "Dynamic Badge - Information",
      description: "Earn the Dynamic Badge by defeating the Electric/Steel Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-1.discordapp.net/external/sDKRj0LI1vXwNY9tNXR8BPoQnksoy3g7TSUj-SoF0po/https/assets.pokenavbot.com/images/badge/c5323285c3134cc52fb7c560193dc16c49844d0afbe4a2b832963268.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "John | @John&Bekka",
        inline: true
      },
      {
        name: "PVP League",
        value: "Great",
        inline: true
      },
      {
        name: "Frontier Challenge",
        value: "No Stage 2 Pokemon Allowed!"
      },
      ],
    }});
  }
  else if(message.content.toLowerCase().indexOf('1291') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 7419530,
      title: "Revenant Badge - Information",
      description: "Earn the Revenant Badge by defeating the Ghost/Poison Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-1.discordapp.net/external/EINV0BIFPcLyHf0ZmC3ffzhFNGJhyrVdipstxV_NTx8/https/assets.pokenavbot.com/images/badge/bb631f7aa5ed90066acf1798e41b5ae81c3fa3d747461abd84633384.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "Tyler | @SirTyler7",
        inline: true
      },
      {
        name: "PVP League",
        value: "Ultra",
        inline: true
      },
      {
        name: "Frontier Challenge",
        value: "No Evolved Pokemon Allowed!"
      },
      ],
    }});
  }
  else if(message.content.toLowerCase().indexOf('1292') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 3447003,
      title: "Hail Badge - Information",
      description: "Earn the Hail Badge by defeating the Water/Ice Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-1.discordapp.net/external/gcsIDN4gIYUV_kTUOh5MPy5_lrPMnU3gaaqe5q4wfCw/https/assets.pokenavbot.com/images/badge/aa10fd864a5b2d2847fd2cc22bd46df118ba3e51aec1b2031a7d3479.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "Easton | @Festive 002",
        inline: true
      },
      {
        name: "PVP League",
        value: "Ultra",
        inline: true
      },
      {
        name: "Frontier Challenge",
        value: "No Electric Type Moves."
      },
      ],
    }});
  }
  else if(message.content.toLowerCase().indexOf('1293') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 9807270,
      title: "Nightmare Badge - Information",
      description: "Earn the Nightmare Badge by defeating the Dark/Fighting Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-1.discordapp.net/external/Xg9G20OWNyRz-3mNjN3lzRZCfLQu0huQr8nZqjNokDU/https/assets.pokenavbot.com/images/badge/cad72a8e2dc0bbafc03638a3a01ceb449c8ced4cd10f92ce49d010c8.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "Joe | @Rogue",
        inline: true
      },
      {
        name: "PVP League",
        value: "Ultra",
        inline: true
      },
      {
        name: "Frontier Challenge",
        value: "No Fighting Type Pokemon."
      },
      ],
    }});
  }
  else if(message.content.toLowerCase().indexOf('1294') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 10038562,
      title: "Pyre Badge - Information",
      description: "Earn the Pyre Badge by defeating the Fire/Normal Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-2.discordapp.net/external/Fa-3xR8PGpfaYsmltUCT7om0FAl40_z6OGAm_wSS7Oc/https/assets.pokenavbot.com/images/badge/56182e1030d64d2cb77273a2243343c1aaa667b3d26143b052545636.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "Jamie | @jojopride",
        inline: true
      },
      {
        name: "PVP League",
        value: "Master",
        inline: true
      },
      {
        name: "Frontier Challenge",
        value: "Majority Red, Orange, Yellow Pokemon!"
      },
      ],
    }});
  }
  else if(message.content.toLowerCase().indexOf('1295') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 1752220,
      title: "Aerial Badge - Information",
      description: "Earn the Aerial Badge by defeating the Dragon/Flying Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-1.discordapp.net/external/M47BDt9FZ4AkfU9l4jpuHLHTzhJNvvKkUdbMWzGRono/https/assets.pokenavbot.com/images/badge/090774d207a1e9d521427c8fd5c56fbe75a322a2304d245e2ff7e0f8.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "Roger | @RogerAK",
        inline: true
      },
      {
        name: "PVP League",
        value: "Master",
        inline: true
      },
      {
        name: "Frontier Challenge",
        value: "No Legendary Pokemon Allowed!"
      },
      ],
    }});
  }
  else if(message.content.toLowerCase().indexOf('1296') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 10181046,
      title: "Fantasy Badge - Information",
      description: "Earn the Fantasy Badge by defeating the Psychic/Fairy Frontier Brain in their Frontier Challenge!",
      thumbnail: {
        url: "https://images-ext-1.discordapp.net/external/c-WrOi2jlacM73WqLn4ry17g8tb2OjchjdGlnWrysHY/https/assets.pokenavbot.com/images/badge/a9de549a3ffa48bea9405efa71e45dc8e9587adc62e5b166ff2c926f.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "*???* | @Totalchaos71",
        inline: true
      },
      {
        name: "PVP League",
        value: "Master",
        inline: true
      },
      {
        name: "Frontier Challenge",
        value: "No Dark Type Pokemon or Moves!"
      },
      ],
    }});
  }
  else if(message.content.toLowerCase().indexOf('1289') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 3066993,
      title: "Essence Badge / Champion Medal",
      description: "Earn the 9th Frontier Badge and recieve the Champion Badge by completing this challenge!",
      thumbnail: {
        url: "https://images-ext-2.discordapp.net/external/vFPQf9F7cD8zuavwXidxsxRH3yaPkNJ2EJgME8TMMv8/https/assets.pokenavbot.com/images/badge/0bafbf71fcd4b3f8da871fccfb15478cd81632fe2f59d34ba3079b38.png"
      },
      fields: [{
        name: "Current Frontier Brain",
        value: "David | @BigDaddyBubChub",
        inline: true
      },
      {
        name: "Current Frontier Brain",
        value: "Jordon | @Jordon",
        inline: true
      },
      {
        name: "Final Frontier Challenge",
        value: "Defeat both Brains in a Great League Match. No Fire or Flying Type Moves are allowed in either match!"
      },
      {
        name: "Prerequisite",
        value: "Trainers must have earned all 8 of the other Frontier Badges!"
      },
      ],
    }});
  }
  else if(message.content.toLowerCase().indexOf('frontierinfo') > -1) {
    message.delete();
    message.channel.send({embed: {
      color: 2899536,
      title: "Bristol/Terryville Frontier League",
      description: "Become the Frontier Champ by defeating each of the **10** Frontier Brain's Challenges!",
      thumbnail: {
        url: "https://images-ext-1.discordapp.net/external/vlE6y0Wp9sicSNh5blH60Gju4xvDVy3wSQutS1ROgCQ/https/assets.pokenavbot.com/images/badge/74bb479a0130d1aeaaaa8bb36d28daf6b15922ffcebcb54c836e9879.png"
      },
      fields: [{
        name: "Badge Challenges",
        value: "In order to earn each Frontier Badge, you must defeat the Frontier Brain following the specific challenge they have created.",
      },
      {
        name: "Frontier Brain Expectations",
        value: "Frontier Brains are only allowed to use Pokemon from their Specific Types. When battling for a Badge the specific Challenge must be followed."
      },
      {
        name: "Challenger Expectations",
        value: "All trainers are expected to behave in a respectful manner. Frontier Brains reserve the right to decline a challenge for those behaving inappropriately."
      },
      {
        name: "Battle Limits",
        value: "Each Frontier Brain determines their availability to accept challenges. Out of respect for their time, you can only challenge each Frontier Brain **once** a day if they're available. On occasion, they might accept an immediate rematch but it is not guaranteed."
      },
      {
        name: "Any Problems?",
        value: "Please report any concerns to @Jordon, @JoJoPride, or @Rogue"
      }
      ],
    }});
  }
});

bot.login(process.env.BOT_TOKEN);
