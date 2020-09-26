const { RSA_NO_PADDING } = require('constants');
const { Client, MessageEmbed, Message } = require('discord.js');
const Statcord = require("statcord.js");
const config = require('./config');
const commands = require('./help');
let client = new Client({
  fetchAllMembers: false, // Remove this if the bot is in large guilds.
  presence: {
    status: 'dnd',
    activity: {
      name: `${config.prefix}help for commands!`,
      type: 'WATCHING'
    }
  }
});
const statcord = new Statcord.Client({
    client,
    key: "statcord.com-759EiYk6YddBd7t0dBP4",
    postCpuStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
});
client.on("ready", async () => {
    console.log(`Logged in as: ${client.user.tag}`);

    // Start auto posting
    statcord.autopost();
});
client.on('message', async message => {
  const dbdb1 = require('quick.db')
let prefix12 = dbdb1.get(`prefix_${message.guild.id}`);
if (prefix12 === null) prefix12 = 'ops!';
  if (message.content.startsWith(prefix12)) {
    let args = message.content.slice(prefix12.length).split(' ');
    let command = args.shift().toLowerCase();
    statcord.postCommand(command, message.author.id);
    const dbd = require('quick.db')
                let blacklist121 = await dbd.fetch(`blacklist_${message.author.id}`)
            
            if (blacklist121 === "Blacklisted") return message.reply("You're blacklisted from using Operator by my developer!")
            switch (command) {
        case 'blacklist':
          const db = require("quick.db")
            
              if (message.author.id != 700096978796937267) return message.reply("You can't use that command!")
              const targetblacklist = message.mentions.users.first()
              if (!targetblacklist) return message.reply("You didn't mention anyone to blacklist!")
              
              let blacklist = await db.fetch(`blacklist_${targetblacklist.id}`)
              
              if (blacklist === "Not") {
                db.set(`blacklist_${targetblacklist.id}`, "Blacklisted") 
                let embed1212121 = new MessageEmbed()
                .setDescription(`${targetblacklist} has been blacklisted!`)
                
                message.channel.send(embed1212121)
              } else if (blacklist === "Blacklisted") {
                 db.set(`blacklist_${targetblacklist.id}`, "Not") 
                let embed1212 = new MessageEmbed()
                .setDescription(`${targetblacklist} has been unblacklisted!`)
                
                message.channel.send(embed1212)
              } else {
                 db.set(`blacklist_${targetblacklist.id}`, "Not") 
                let embed12121 = new MessageEmbed()
                .setDescription(`Set up data for ${targetblacklist}!`)
                
                message.channel.send(embed12121)
              }
                break
      case 'setprefix':
        const dbdbd = require('quick.db')
        if(!message.member.hasPermission("ADMINISTRATOR")) {
          return message.channel.send("You are not allowed or do not have permission to change prefix")
        }
        
        if(!args[0]) {
          return message.channel.send("Please give the prefix that you want to set")
        } 
        
        if(args.join(" ") === 'delete') {
          dbdbd.delete(`prefix_${message.guild.id}`)
         return await message.channel.send("Set Prefix to: ops!")
        }
        
        if(args[1]) {
          return message.channel.send("You can not set prefix a double argument")
        }
        
        if(args[0].length > 5) {
          return message.channel.send("You can not send prefix more than 3 characters")
        }
        
        dbdbd.set(`prefix_${message.guild.id}`, args[0])
      await message.channel.send(`Set Bot Prefix to ${args[0]}`)
      break
      case 'say':
      case 'repeat':
        if (args.includes('@everyone'))return message.reply('I won\'t repeat a message with a here ping in it!')
        if (args.includes('@here'))return message.reply('I won\'t repeat a message with a everyone ping in it!')
        if (args.length > 0)
          message.channel.send(`Said by: ${message.author.tag}\n\n**${args.join(' ')}**`);
        else
          message.reply('You did not send a message to repeat, cancelling command.')
        break;
      case 'kick':
       if (!message.member.hasPermission("KICK_MEMBERS")) //Checks if user has permission to run the command.
    return message.channel.send("You are not allowed to run that command.");

  let member12 = message.mentions.members.first(); //We specify the member we wish to kick.
  if (!member12) return message.channel.send("Please specify a valid user."); //If we don't specify a user, nor enter a valid user, it will will respond, letting us know to type a valid user.
  if (!member12.kickable) //This checks if the user can be kicked, if their permissions don't enable them to get kicked, such as Admins, it will let you know it can't kick them.
  if (member12.hasPermission('ADMINISTRATOR'))
  return message.reply('That user is a mod/admin I can\'t do that!')
  if (member12.id == message.author.id) return message.reply('You can\'t kick yourself!')
    return message.channel.send("Unable to kick specified user.");

  let reason = args.slice(1).join(" "); //Here we specify the reason they got kicked, it is optional, but it helps for mod logs.
  if (!reason) reason = "No reason provided."; //If they don't specify a reason, we automatically set the reason as "No reason provided."
  const yesorno = new MessageEmbed()
  .setColor('BLUE')
  .setTitle(`Are you sure you'd like to kick ${member12.user.tag}?`)
  .setDescription(`React with ✅ or ❌ within the next 15 seconds confirming you\'d like to kick <@${member12.id}> !`)
  .setFooter(`Caused by: ${message.author.tag}`, message.author.displayAvatarURL())
  const kickyes = new MessageEmbed()
  .setTitle(`${member12.user.tag} has been sucessfully kicked!`)
  .setColor('GREEN')
  const kickno = new MessageEmbed()
  .setColor('RED')
  .setTitle(`Cancelled the kick with target ${member12.user.tag}`)
  const reply123 = await message.reply(yesorno)
  await reply123.react('✅')
  await reply123.react('❌')
  const filter1 = (reaction, user) => reaction.emoji.name === '✅' && user.id == message.author.id
  reply123.createReactionCollector(filter1, { maxMatches: 1, time: 15000, error: 'You failed to react in-time!'})
    .on('collect', async () => await reply123.edit(kickyes) && member12.kick(reason) && reply123.reactions.removeAll());
    const filter12 = (reaction, user) => reaction.emoji.name === '❌' && user.id == message.author.id
    reply123.createReactionCollector(filter12, { maxMatches: 1, time: 15000, error: 'You failed to react in-time!' })
      .on('collect', async () => await reply123.edit(kickno) && reply123.reactions.removeAll());
  break
         case 'meme':
        const randomPuppy = require('random-puppy');
        const subReddits = ["me_irl", "dankmeme"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        const embed2 = new MessageEmbed()
        .setImage(img)
        .setTitle(`Here's your meme!`)
        .setDescription('Memes provided by me_irl and dankmeme')
        .setColor('RANDOM')
        .setFooter(`Reuested by: ${message.author.tag}`, message.author.displayAvatarURL())

        message.channel.send(embed2);
        break
       case 'vibecheck':
       if (!message.member.hasPermission('ADMINISTRATOR'))
           return message.channel.send("You can't use that command!")

  let member2 = message.mentions.members.first(); //We specify the member we wish to kick.
  if (!member2) return message.channel.send("Please specify a valid user."); //If we don't specify a user, nor enter a valid user, it will will respond, letting us know to type a valid user.
  if (!member2.bannable) //This checks if the user can be banned, if their permissions don't enable them to get banned, such as Admins, it will let you know it can't ban them.
    return message.channel.send("Unable to vibecheck specified user."); 

  let reason2 = args.slice(1).join(" "); //Here we specify the reason they got kicked, it is optional, but it helps for mod logs.
  if (!reason2) reason2 = "No reason provided."; 
  member2.send(`You've been vibechecked from ${message.guild.name}, with reason ${reason2}!`)
  await message.guild.members.ban(member2, { reason: reason2 }).catch(err => console.log(err));
let embed7723 = new MessageEmbed()
.setTitle(`Vibecheck Complete!`)
.setDescription(`Banned: ${member2}, With reason: ${reason2}`)
.setImage('https://i.imgflip.com/3jy2cq.jpg')
.setColor('GREEN')
.setFooter(`Vibechecked by: ${message.author.tag}`, message.author.displayAvatarURL())
let embed3 = new MessageEmbed()
.setTitle(`Vibechecking...`)
.setDescription(`Banning: ${member2}`)
.setColor('RED')
.setFooter(`Vibechecked by: ${message.author.tag}`, message.author.displayAvatarURL())
await message.channel.send(embed3).then(sentEmbed => {
  sentEmbed.edit(embed7723)
  })

  break

  case 'serverinfo':
  const { guild } = message
    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()
    const moment125 = require('moment')
    const members = message.guild.members.cache;
    const filterLevels = {
      DISABLED: 'Off',
      MEMBERS_WITHOUT_ROLES: 'No Role',
      ALL_MEMBERS: 'Everyone'
    };
    
    const verificationLevels = {
      NONE: 'None',
      LOW: 'Low',
      MEDIUM: 'Medium',
      HIGH: '(╯°□°）╯︵ ┻━┻',
      VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
    };

    const embed652 = new MessageEmbed()
      .setAuthor(name, icon)
      .setColor('RANDOM')
      .setTitle('Server Info')
      .addField('Owner', owner.user.tag, true)
      .addField('Region', region, true)
      .addField('Members', memberCount, true)
      .addField('Server Created', moment125.utc(guild.createdAt).format("dddd, MMMM Do YYYY"), true) 
      .addField('Server ID', guild.id, true)
      .addField('Boosts', message.guild.premiumSubscriptionCount || '0', true)
      .addField('Roles', message.guild.roles.cache.size, true)
      .addField('Channels', message.guild.channels.cache.size, true)
      .addField('Emojis', message.guild.emojis.cache.size, true)
      .addField('Verification Level', verificationLevels[message.guild.verificationLevel], true)
      .addField('Explicit Filter', filterLevels[message.guild.explicitContentFilter], true)
      .addField('Online Users', members.filter(member => member.presence.status === 'online').size, true)
      .addField('Do Not Disturb Users', members.filter(member => member.presence.status === 'dnd').size, true)
      .addField('Idle Users', members.filter(member => member.presence.status === 'idle').size, true)
      .addField('Offline Users', members.filter(member => member.presence.status === 'offline').size, true)
      .addField('AFK Timeout', afkTimeout / 60, true)
      .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp()
    message.channel.send(embed652)
  break
  case 'purge':
    case 'clear':
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply('You don\'t have permission to use that!')
    const args1234 = message.content.split(' ').slice(1); 
    const amount1 = args1234.join(' '); 
    
    if (!amount1) return message.reply('You haven\'t given an amount of messages which should be deleted!'); 
    if (isNaN(amount1)) return message.reply('The amount parameter isn`t a number!'); 
    
    if (amount1 > 100) return message.reply('You can`t delete more than 100 messages at once!'); 
    if (amount1 < 1) return msg.reply('You have to delete at least 1 message!'); 
    message.delete()
    
    await message.channel.messages.fetch({ limit: amount1 }).then(messages => { 
        message.channel.bulkDelete(messages)});
    break
    case 'developers':
    case 'devs':
    let embedssd = new MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
    .setColor('GREEN')
    .setTitle('Operator\'s Development Team:')
    .setThumbnail('https://cdn.discordapp.com/avatars/700096978796937267/a_e11507e4f84c19beedcafb5395caab44.gif?size=128')
    .setDescription('Operator is developed and managed by: Excel#0666')
    message.channel.send(embedssd)
    break
    case 'mute':
     if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }
       const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to mute"
      );
    }
 
    if(user.id === message.author.id) {
      return message.channel.send("You can't mute yourself.");
    }
     
    let reason3 = args.slice(1).join(" ")
    
    
    if(!reason3) {
      return message.channel.send("Please Give the reason to mute the member")
    }
      
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
      if(!muterole) {
      return message.channel.send("This server do not have role with name `Muted`")
    }
     if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already muted");
    }
    user.roles.add(muterole)
    
await message.channel.send(`You muted **${message.mentions.users.first().tag}** For \`${reason3}\``)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason3}\``)
    break
    case 'unmute':
     if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "You are not allowed to run that command."
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }
      const user1 = message.mentions.members.first();

    if (!user1) {
      return message.channel.send(
        "Please specify a valid user to unmute."
      );
    }
let muterole1 = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
 if(user1.roles.cache.has(muterole1)) {
      return message.channel.send("Given user isn't muted.")
    }
    
 user1.roles.remove(muterole1)
    
    await message.channel.send(`**${message.mentions.users.first().tag}** is unmuted`)
    
    user1.send(`You are now unmuted in **${message.guild.name}!**`)
   break
   case 'userinfo':
   case 'whois':
   const moment = require('moment');

let user6;
if (message.mentions.users.first()) {
    user6 = message.mentions.users.first();
} else {
    user6 = message.author;
}

const member7 = message.guild.member(user6);

const embed8 = new MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail(client.users.cache.get(user6.id).displayAvatarURL())
    .addField(`${user6.tag}`, `${user6}`, true)
    .addField("ID:", `${user6.id}`, true)
    .addField("Nickname:", `${member7.nickname !== null ? `${member7.nickname}` : 'None'}`, true)
    .addField("Status", `${user6.presence.status}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game", `${user6.presence.game ? user6.presence.game.name : 'None'}`, true)
    .addField("Bot", `${user6.bot  ? user6.bot : 'No'}`, true)
    .addField("Joined The Server On", `${moment.utc(member7.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On", `${moment.utc(user6.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField("Roles:", member7.roles.cache.map(roles => `${roles}`).join(', '), true)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send(embed8);
break
    case 'giveaway':
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.reply('You must have manage messages permission to create a giveaway!')
    const ms = require("ms");

    if (!args[0]) return message.channel.send(`You did not specify your time!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `You did not use the correct formatting for the time!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I could not find that channel in the guild!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`*Giveaway created in ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`New giveaway!🎉`)
      .setDescription(`😉Host: ${message.author}\n🎁Prize: **${prize}**`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Not enough people reacted for me to start draw a winner!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `🎁The winner of the giveaway for **${prize}** is... ${winner}!`
      );
    }, ms(args[0]));
    break
    case 'poll':
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        `You can't use this command!`
      );
    const channel1 =
      message.mentions.channels.first()
      if (!channel1) {
      return message.channel.send(`You did not mention the channel you want the poll to take place in!`);
    }
    let question = message.content.split(`${prefix12}poll ${channel1}`).join(" ");
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    let embed9 = new MessageEmbed()
      .setTitle(`New poll!`)
      .setDescription(`${question}`)
      .setFooter(`Poll By: ${message.author.tag}`, message.author.displayAvatarURL())
      .setColor(`RANDOM`);
    let messagee = await client.channels.cache.get(channel1.id).send(embed9);
    await messagee.react("👍");
    await messagee.react("👎");
break
case 'trivia':
let questions = [
  {
    title: "Best programming language",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "Best NPM package",
    options: ["int.engine", "ms", "ws", "discord.js"],
    correct: 3,
  },
  {
  title: "How many soccer players should each team have on the field at the start of each match?",
  options: ["9 Players", "7 Players", "11 Players", "10 Players"],
  correct: 3,
  },
  {
    title: "What year was the very first model of the iPhone released?",
    options: ["2008", "2007", "2009", "2006"],
    correct: 2,
    },
    {
      title: "Which email service is owned by Microsoft?",
      options: ["Aol", "Outlook", "Gmail", "Hotmail"],
      correct: 4,
      },
        {
          title: "Who was the first woman to win a Nobel Prize (in 1903)",
          options: ["Marie Curie", "Malala Yousafzai", "Bertha von Suttner", "Maria Goeppert Mayer"],
          correct: 1,
          },
          {
            title: "What animals are pearls found in?",
            options: ["Squid", "Oysters", "Clam", "Lobsters"],
            correct: 2,
          },
          {
            title: "Which animal can be seen on the Porsche logo?",
            options: ["Donkey", "Cow", "Horse", "Otter"],
            correct: 3,
            },
            {
              title: "Which company owns Bugatti, Lamborghini. Audi, Porsche, and Ducati?",
              options: ["Toyota", "BMW", "Ford", "Volkswagen"],
              correct: 4,
              }];
   let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed99 = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Reply to this message with the correct question number! You have 15 seconds.`
      );
    message.channel.send(Embed99);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
    }
    break
    case 'slowmode':
      if (!message.member.hasPermission('ADMINISTRATOR'))
      return Message.reply('You don\'t have permission to use that command!')
      if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason1111 = message.content.slice(
      prefix12.length + 9 + args[0].length + 1
    );
    if (!reason1111) {
      reason1111 = "No reason provided!";
    }
    message.channel.setRateLimitPerUser(args[0], reason1111);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}** with the reason: **${reason1111}**`
    );
  break

  case 'nuke':
    if(!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply('You can\'t use that comamnd!')
      message.channel.bulkDelete(100)
  break
  case 'feedback':
    let feedback_message = message.content.split(`${prefix12}feedback `).join("");
if (message.member.id == 656978020933959727) return message.reply(`You've been blacklisted from using this command by official bot developers!`)
if (!feedback_message) return message.reply('You didn\'t provide the feedback you want to send!')
message.reply('Thanks for your feedback, my developers will review it when they get a chance!');

let embed7771 = new MessageEmbed()
.setColor('BLUE')
.setTitle('New feedback!')
.setDescription(`${message.author.tag} sent in some feedback!`)
.addField('They sent the following feedback', feedback_message)
.setThumbnail(message.author.displayAvatarURL())
.setFooter(`Sent By: ${message.author.tag}`, message.author.displayAvatarURL())
client.channels.cache.get('755954222998224986').send(embed7771)
break
  case 'emojis':
  let Emojis = "";
  let EmojisAnimated = "";
  let EmojiCount = 0;
  let Animated = 0;
  let OverallEmojis = 0;
  function Emoji(id) {
    return client.emojis.cache.get(id).toString();
  }
  message.guild.emojis.cache.forEach((emoji) => {
    OverallEmojis++;
    if (emoji.animated) {
      Animated++;
      EmojisAnimated += Emoji(emoji.id);
    } else {
      EmojiCount++;
      Emojis += Emoji(emoji.id);
    }
  });
  let Embed22222222222 = new MessageEmbed()
    .setTitle(`Emojis in ${message.guild.name}.`)
    .setDescription(
      `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`
    )
    .setColor(`RANDOM`);
  message.channel.send(Embed22222222222);
break
  case 'role':
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(
      `You can't use this command!`
    );
  if (!args[0])
  message.reply('You didn\'t mention if you want to create or delete a role!')
  if (args[0].toLowerCase() == "create") {
    let rName = message.content.split(`${prefix12}role create `).join("");
    let rColor;
    args.forEach((arg) => {
      if (arg.startsWith("#")) {
        rColor = arg;
      }
    });
    if (!rName) {
      return message.channel.send(
        `You did not specify a name for your role!`
      );
    }
    if (!rColor) {
      return message.channel.send(
        `You did not specify a color for your role!`
      );
    }
    if (rColor >= 16777215)
      return message.channel.send(
        `That hex color range was too big! Keep it between 0 and 16777215`
      );
    if (rColor <= 0)
      return message.channel.send(
        `That hex color range was too small! Keep it between 0 and 16777215`
      );
    rName = rName.replace(`${rColor}`, ``);
    let rNew = await message.guild.roles.create({
      data: {
        name: rName,
        color: rColor,
      },
    });
    const Embed = new MessageEmbed()
      .setTitle(`New role!`)
      .setDescription(
        `${message.author.username} has created the role "${rName}"\nIts Hex Color Code: ${rColor}\nIts ID: ${rNew.id}`
      )
      .setColor(rColor);
    message.channel.send(Embed);
  } else if (args[0].toLowerCase() == "delete") {
    let roleDelete =
      message.guild.roles.cache.get(args[1]) ||
      message.guild.roles.cache.find((r) => r.name == args[1]);
    if (!roleDelete)
      return message.channel.send(
        `You did not specify the name or id of the role you wish to delete!`
      );
    roleDelete.delete();
    const Embed1 = new MessageEmbed()
      .setTitle(`Deleted role!`)
      .setColor(roleDelete.color)
      .setDescription(
        `${message.author.username} has deleted the role "${roleDelete.name}"\nIts ID: ${roleDelete.id}\nIts Hex Color Code: ${roleDelete.color}`
      );
    message.channel.send(Embed1);
  }
break
    case 'report':
      if (message.member.id == 656978020933959727)
      return message.delete()
    let User = message.mentions.users.first() || null;

    if (User == null) {
      return message.channel.send(`You did not mention a user!`);
    } else {
      let Reason = message.content.slice(prefix12.length + 22 + 7) || null;
      if (Reason == null) {
        return message.channel.send(
          `You did not specify a reason for the report!`
        );
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel)
        return message.channel.send(
          `There is no channel in this guild which is called \`reports\``
        );
        message.react("✅")
      let Embed122 = new MessageEmbed()
        .setTitle(`New report!`)
        .setDescription(
          `\`${message.author.tag}\` has reported the user \`${User.tag}\`! `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "Reporter ID", value: `${message.author.id}`, inline: true },
          { name: "Reporter Tag", value: `${message.author.tag}`, inline: true },
          { name: "Reported ID", value: `${User.id}`, inline: true },
          { name: "Reported Tag", value: `${User.tag}`, inline: true },
          { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
          {
            name: "Date (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed122);
    }
    break
case 'weather':
  const weather = require('weather-js')
  if (!args[0]) return message.reply('You\'re required to enter a place to fetch the weather from!')
  
  weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
      if(error) return message.channel.send(error);
      if(!args[0]) return message.channel.send('Please specify a location')

      if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

      var current = result[0].current;
      var location = result[0].location;

      const weatherinfo = new MessageEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Weather forecast for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0x111111)
      .addField('Timezone', `UTC${location.timezone}`, true)
      .addField('Degree Type', 'Farneheit', true)
      .addField('Temperature', `${current.temperature}°`, true)
      .addField('Wind', current.winddisplay, true)
      .addField('Feels like', `${current.feelslike}°`, true)
      .addField('Humidity', `${current.humidity}%`, true)
      .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())


      message.channel.send(weatherinfo)
      })       
      break 
case 'announce':
  if (!message.member.permissions.has('MANAGE_MESSAGES'))
  return message.reply('You can\'t use that command!')
  let rChannel = message.mentions.channels.first()
  if (!rChannel)
    return message.channel.send(
      `You did not specify your channel to send the announcement too!`
    );
  console.log(rChannel);
  let MSG = message.content
    .split(`${prefix12}announce ${rChannel} `)
    .join(" ");
  if (!MSG)
    return message.channel.send(`You did not specify your message to send!`);
  const _ = new MessageEmbed()
    .setTitle(`New announcement!`)
    .setDescription(`${MSG}`)
    .setColor("RANDOM")
    .setFooter(`Announcement by: ${message.author.tag}`, message.author.displayAvatarURL());
  rChannel.send(_);
break
case '8ball':
    let question1 = message.content.slice(prefix12.length + 6);
    if (!question1)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        'Maybe.',
        'Certainly not.',
        'I hope so.',
        'Not in your wildest dreams.',
        'There is a good chance.',
        'Quite likely.',
        'I think so.',
        'I hope not.',
        'I hope so.',
        'Never!',
        'Pfft.',
        'Sorry, bucko.',
        'Hell, yes.',
        'Hell to the no.',
        'The future is bleak.',
        'The future is uncertain.',
        'I would rather not say.',
        'Who cares?',
        'Possibly.',
        'Never, ever, ever.',
        'There is a small chance.',
        'Yes!',
        'lol no.',
        'There is a high probability.',
        'What difference does it makes?',
        'Not my problem.',
        'Ask someone else.'
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed11 = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: ${question1}\nMy reply: ${response}`)
        .setColor(`RANDOM`)
      message.channel.send(Embed11)
    }
   break 
   case 'covid':
     const Discord = require('discord.js')
    const fetch = require('node-fetch');

   let countries = args.join(" ");


   const noArgs = new MessageEmbed()
   .setTitle('Missing arguments')
   .setColor(0xFF0000)
   .setDescription('You are missing some args (ex: ops!covid world || ops!covid US)')
   .setTimestamp()

   if(!args[0]) return message.channel.send(noArgs);

   if(args[0] === "world"){
       fetch(`https://covid19.mathdro.id/api`)
       .then(response => response.json())
       .then(data => {
           let confirmed = data.confirmed.value.toLocaleString()
           let recovered = data.recovered.value.toLocaleString()
           let deaths = data.deaths.value.toLocaleString()

           const embed = new Discord.MessageEmbed()
           .setTitle(`Worldwide COVID-19 Stats 🌎`)
           .addField('Confirmed Cases', confirmed)
           .addField('Recovered', recovered)
           .addField('Deaths', deaths)
           .setColor('GREEN')

           message.channel.send(embed)
       })
   } else {
       fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
       .then(response => response.json())
       .then(data => {
           let confirmed = data.confirmed.value.toLocaleString()
           let recovered = data.recovered.value.toLocaleString()
           let deaths = data.deaths.value.toLocaleString()

           const embed = new Discord.MessageEmbed()
           .setTitle(`COVID-19 Stats for **${countries}**`)
           .addField('Confirmed Cases', confirmed)
           .addField('Recovered', recovered)
           .addField('Deaths', deaths)
           .setColor('GREEN')

           message.channel.send(embed)
       }).catch(e => {
           return message.channel.send('Invalid country provided')
       })
      }
  break
  case 'invite':
  let embed23 = new MessageEmbed()
  .setColor('GREEN')
  .setTitle('Invite the bot to your server!')
  .setURL('https://discord.com/oauth2/authorize?client_id=755070612090650714&permissions=201714758&scope=bot')
  .setDescription('Join the support server: https://discord.gg/fSTUtRF')
  .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(embed23)
  break
  case 'warn':
  const fs = require('fs')
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8")); 
    var embedColor = 'GREEN' 
 
    var missingPermissionsEmbed = new MessageEmbed() 
        .setColor(embedColor)
        .setFooter(`Message by: ${message.author.tag}`, message.author.displayAvatarURL())
        .setTitle('Insufficient Permissions!')
        .setDescription('You need the `MANAGE_MESSAGES` permission to use this command!')
        .setTimestamp();
    var missingArgsEmbed = new MessageEmbed()
        .setColor(embedColor)
        .setFooter(`Message by: ${message.author.tag}`, message.author.displayAvatarURL())
        .setTitle('Missing Arguments!')
        .setDescription('Usage: `warn [user-mention] [Reason]`')
        .setTimestamp();
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); 
    let wUser = message.mentions.users.first(); 
    if(!wUser) return message.channel.send(missingArgsEmbed); 
    let reason11 = args.slice(1).join(' ')
    if(!reason11) return message.channel.send(missingArgsEmbed); 
    if(wUser.id == 700096978796937267) return message.reply(`You are unable to warn the bot developer!`) 
    var warningEmbed = new MessageEmbed()
        .setColor(embedColor)
        .setTitle(`You've been warned in ${message.guild.name}`)
        .addField('Moderator', message.author.tag)
        .addField('Reason', reason11)
        .setFooter(`Warned by: ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();
        wUser.send(warningEmbed); 
    var warnSuccessfulEmbed = new MessageEmbed()
        .setColor(embedColor)
        .setTitle('User Successfully Warned!')
        .setFooter(`Warning by: ${message.author.tag}`, message.author.displayAvatarURL());
        message.channel.send(warnSuccessfulEmbed)
        if (!warns[wUser.id])warns[wUser.id] = {
          warns: 0
        }; //This sets the default number of warnings as 0.
      
        warns[wUser.id].warns++; //This will add 1 warning each time we use the command.
      
        fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
          if (err) console.log(err);
        });
        message.delete()
break
case 'ping':
case 'pong':
  const ws = require('ws')
  let embed100012 = new MessageEmbed()
  .setTitle('**Pinging...**')
  .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
   let msg12121 = await message.channel.send(embed100012)
  let embed2000 = new MessageEmbed()
  .setTitle('Pong!🏓')
  .addField('Response Time', Date.now() - msg12121.createdTimestamp + 'ms')
  .addField('Reply Time', Date.now() - message.createdTimestamp + 'ms')
  .addField('API Latency', Math.round(client.ws.ping) + 'ms')
  await msg12121.edit(embed2000)
  break
  case 'giverole':
    if (!message.member.hasPermission('ADMINISTRATOR'))
    return;
    const targetUser1221 = message.mentions.members.first()
    if (!targetUser1221) {
      return message.reply('Please specify someone to give a role to.')
    }
    const roleName = message.content.split(`${prefix12}giverole ${targetUser1221} `).join("");
      const role565 = message.guild.roles.cache.find(role => role.name === roleName);
   
    targetUser1221.roles.add(role565)
    let role1 = role565.id
    let Embeddqwqw = new MessageEmbed()
    .setDescription(`Added Role: <@&${role1}> to ${targetUser1221.user.tag}!`)
    .setColor('GREEN')
    .setFooter(`Given by: ${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(Embeddqwqw)
    break
  
    case 'stats':
      const { version: djsversion } = require('discord.js')
      const { version } = require('./package.json')
      const { utc } = require('moment')
      const os = require('os')
          const core = os.cpus()[0];
          const embed1212 = new MessageEmbed()
          .setTitle('Operator | Stats')
            .setThumbnail('https://cdn.discordapp.com/avatars/755070612090650714/8223cddad008ef6b28d15e1e5bc8cd0c.png?size=128')
            .setColor('BLUE')
            .addField('General', [
              `User: ${client.user.tag} (${client.user.id})`,
              `Servers: ${client.guilds.cache.size.toLocaleString()} `,
              `Users: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
              `Channels: ${client.channels.cache.size.toLocaleString()}`,
              `Creation Date: 14th September 2020, 14:21`,
              `Node.js: ${process.version}`,
              `Version: v${version}`,
              `Discord.js: v${djsversion}`,
              '\u200b'
            ])
            .addField('System', [
              `Platform: ${process.platform}`,
              `CPU:`,
              `\u3000 Cores: ${os.cpus().length}`,
              `\u3000 Model: ${core.model}`,
              `\u3000 Speed: ${core.speed}MHz`
            ])
            .setFooter('Requested by: ' + message.author.tag, message.author.displayAvatarURL())
            .setTimestamp();
            message.channel.send(embed1212)
            break
   case 'devmessage':
   if (message.member.id != 700096978796937267) return message.reply('You can\'t use that command!')
   let message112121212 = args.join(" ")
   if (!message112121212) return message.reply('C\'mon you\'re my dev you should know to put the input!')
   const embed12122 = new MessageEmbed()
   .setColor('BLUE')
   .setTitle('Announcement By Operator\'s Developer')
   .setDescription('**' + message112121212 + '**\nSincerely, Operator\'s Developer Excel#4599')
   .setFooter(`Invite the bot to your server, by using ops!invite!`, client.user.displayAvatarURL())
   message.channel.send(embed12122)
   break
   case 'gayrate':
   case 'howgay':
    const guytorate = message.mentions.members.first();
    if (!guytorate)
    return message.channel.send('You never mentioned who I need to gayrate!')
    const excel1212 = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Gay Rate Machine`)
    .setDescription(`${guytorate.user} is 0% gay:gay_pride_flag:`)
    .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
    if (guytorate.id == 700096978796937267) return message.channel.send(excel1212);
     const excel12 = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Gay Rate Machine`)
    .setDescription(`${guytorate.user} is 100% gay:gay_pride_flag:`)
    .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
    if (message.member.id == 700096978796937267) return message.channel.send(excel12);
    const howgay = Math. floor(Math. random() * (100 - 1 + 1)) + 1
    const urmom1 = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Gay Rate Machine`)
    .setDescription(`${guytorate.user} is ${howgay}% gay:gay_pride_flag:`)
    .setTimestamp()
    .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(urmom1)
    break
   case 'eval':
     if (message.member.id != 700096978796937267)
     return message.reply('You can\'t use that command!')
    try {
            date = new Date();
            const input = args.join(" ");
            let output = eval(input);
            if (typeof output !== 'string') {output = require('util').inspect(output)}
    
            const embed123 = new MessageEmbed()
                .setAuthor("Test Code", "https://i.imgur.com/hyS5l2c.png")
                .addField("📥 Input", "\`\`\`js\n" + input + "\n\`\`\`")
                .addField("📤 Output", "\`\`\`js\n" + output + "\n\`\`\`")
                .setColor('GREEN')
                .setFooter("Executed")
                .setTimestamp()
            const hiddenembed = new MessageEmbed()
            .setColor('RED')
            .setTitle('Evaluation hidden by evaluator.')
    
                const reply12 = await message.channel.send(embed123)
                await reply12.react('❌');
              
                const filter = (reaction, user) => reaction.emoji.name === '❌' && user.id == message.author.id
                reply12.createReactionCollector(filter, { maxMatches: 1 })
                  .on('collect', async () => await reply12.edit(hiddenembed) && reply12.reactions.removeAll());
    } catch (err) {
        const embed1234 = new MessageEmbed()
            .setAuthor("Test Code", "https://i.imgur.com/hyS5l2c.png")
            .addField("❌ Error", "`" + err + "`")
            .setColor('RED')
            .setFooter("Executed")
            .setTimestamp()
            const hiddenembe1 = new MessageEmbed()
            .setColor('RED')
            .setTitle('Evaluation hidden by evaluator.')
    
            const reply123 = await message.channel.send(embed1234)
            await reply123.react('❌');
          
            const filter = (reaction, user) => reaction.emoji.name === '❌' && user.id == message.author.id
            reply123.createReactionCollector(filter, { maxMatches: 1 })
              .on('collect', async () => await reply123.edit(hiddenembe1));
    }
break
case 'restart':
  if (message.member.id != 700096978796937267)
  return message.reply('You can\'t use that command!')
  message.channel.send('Destroying the client, and re-logging in.')
  client.destroy()
  client.login(process.env.token)
    break
      case 'ban':
      const urmom = new MessageEmbed()
      .setTitle(`Hello ${message.author.tag}!`)
      .setColor('RED')
      .setDescription('It has came to my attention, you\'re trying to use the ban command! We\'re tidying some things up on our end within this command and truly sorry for the inconvience. Please stay calm, info will be released within my support server. Check ops!invite for the link.')
      .setFooter('Sincerely, Excel#4599 - Operator\'s developer', `https://cdn.discordapp.com/avatars/700096978796937267/a_e11507e4f84c19beedcafb5395caab44.gif?size=128`)
      message.reply(urmom)
      break
      case 'cal':
        const math = require('discord-math');
        let num1 = Number(args[0]);
        let operation = args[1];
        let num2 = Number(args[2]);
        try {
        const embed7712 = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Caculation Sucessful!')
        .setFooter(`Caculation by: ${message.author.tag}`, message.author.displayAvatarURL())
        .addField("Answer",  math.calculate(num1, operation, num2))
        .setTimestamp()
        const hiddenembed1 = new MessageEmbed()
        .setColor('RED')
        .setTitle('Caculation hidden by caculator.')

            const reply122 = await message.channel.send(embed7712)
            await reply122.react('❌');
          
            const filter1111 = (reaction, user) => reaction.emoji.name === '❌' && user.id == message.author.id
            reply122.createReactionCollector(filter1111, { maxMatches: 1 })
              .on('collect', async () => await reply122.edit(hiddenembed1) && reply122.reactions.removeAll());
} catch (err) {
    const embed12341 = new MessageEmbed()
        .setAuthor("Caculation", "https://i.imgur.com/hyS5l2c.png")
        .addField("❌ Error", "`" + err + "`")
        .setColor('RED')
        .setFooter("Executed")
        .setTimestamp()
        const hiddenembe1 = new MessageEmbed()
        .setColor('RED')
        .setTitle('Caculation hidden by caculator.')
        const reply12231 = await message.channel.send(embed12341)
        await reply12231.react('❌');
      
        const filter12121 = (reaction, user) => reaction.emoji.name === '❌' && user.id == message.author.id
        reply12231.createReactionCollector(filter12121, { maxMatches: 1 })
          .on('collect', async () => await reply12231.edit(hiddenembe1) && reply12231.reactions.removeAll());
}
break
      case 'help':
        let announcement = 'The ban command is currently, on maitainance mode. Were trying to tidy things up on our ends, please stay calm!\nSincerely, Excel#4599 - Operator\'s developer'
        let embed =  new MessageEmbed()
          .setTitle('Here\'s a list of my commands!')
          .setColor('RANDOM')
          .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
          .addField('Announcement', announcement)
          .setThumbnail(client.user.displayAvatarURL());
        if (!args[0])
          embed
            .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` :: ${commands[command].description}`).join('\n'));
        else {
          if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
            let command = Object.keys(commands).includes(args[0].toLowerCase())? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
            embed
              .setTitle(`COMMAND - ${command}`)
              .setColor('GREEN')

            if (commands[command].aliases)
              embed.addField('Command aliases', `\`${commands[command].aliases.join('`, `')}\``);
            embed
              .addField('DESCRIPTION', commands[command].description)
              .addField('FORMAT', `\`\`\`${config.prefix}${commands[command].format}\`\`\``);
          } else {
            embed
              .setTitle('Perhaps you misspelled?')
              .setColor('RED')
              .setDescription('This command does not exist. Please use the help command without specifying any commands to list them all.');
          }
        }
        message.channel.send(embed);
        break;
    }
    }
  }
);
require('./server')();
client.login(process.env.token);