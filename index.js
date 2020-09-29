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
  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
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
