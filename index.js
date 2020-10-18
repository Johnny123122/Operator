const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')
const bot = new Discord.Client({
  fetchAllMembers: false
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})
bot.on("ready", async () => {
console.log(`Logged in, ${bot.user.tag} is online on ${bot.guilds.cache.size} servers!`);
let activities = [
  `Watching over ${bot.guilds.cache.size.toLocaleString()} Servers!`,
  `Watching over ${bot.channels.cache.size.toLocaleString()} Channels!`,
  `Watching over ${bot.users.cache.size.toLocaleString()} Users!`,
  `New help system!`
],
i = 0;
setInterval(
() =>
  bot.user.setActivity(
    `ops!help | ${activities[i++ % activities.length]}`,
    { type: "WATCHING" }
  ),
10000
);
bot.on('guildCreate', async guild =>{
  const channelId = '762790585743441930';
  const channel = bot.channels.cache.get(channelId);
  const sowner = guild.owner.user; 
  if(!channel) return; 
  const embed12 = new MessageEmbed()
      .setTitle('I Joined A Guild!')
      .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}\n**Owner:** ${sowner.tag}`)
      .setTimestamp()
      .setColor('GREEN')
      .setFooter(`I'm In ${bot.guilds.cache.size} Guilds Now!`);
  channel.send(embed12);
})
bot.on('guildCreate', guild =>{
  if(!guild) return; 
  const embed121 = new MessageEmbed()
      .setTitle('Thanks for adding me to your server!')
      .setDescription(`Hey-yo! I've been added to your server: **${guild.name}**\nIs this your first time using Operator? Very well then, you may say ops!help in any of my guilds for a list of commands.\nMy prefix is set to \`ops!\`\nStill got questions? No worries! We've got you covered. Join The Support Server To Ask: [Click Here!](https://discord.com)`)
      .setTimestamp()
      .setColor('GREEN')
      .setFooter(`I'm In ${bot.guilds.cache.size} Guilds Now!`);
  guild.owner.user.send(embed121);
})
  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.reply('You must run my commands within a guild!');
    const dbdb1 = require("quick.db");
    let prefix12 = dbdb1.get(`prefix_${message.guild.id}`);
    if (prefix12 === null) prefix12 = "ops!";
    let args = message.content.slice(prefix12.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;
    module.exports.prefix = prefix12

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd)
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix12)) return;

          
  try {
      let blacklist = await db.fetch(`blacklist_${message.author.id}`)
      if (blacklist === "Blacklisted") return message.reply("You've been blacklisted from using me from my developer!");
    commandfile.run(bot, message, args)
  
  } catch (e) {
  }}
  )})


bot.login(process.env.token);
