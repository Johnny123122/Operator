const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const db = require("quick.db");

  if (message.author.id != 700096978796937267)
    return message.reply("You can't use that command!");
  const targetblacklist = message.mentions.users.first();
  if (!targetblacklist)
    return message.reply("You didn't mention anyone to blacklist!");

  let blacklist = await db.fetch(`blacklist_${targetblacklist.id}`);

  if (blacklist === "Not") {
    db.set(`blacklist_${targetblacklist.id}`, "Blacklisted");
    let embed1212121 = new MessageEmbed()
      .setDescription(
        `${targetblacklist} has been blacklisted by ${message.author.tag}!`
      )
      .setColor("RED");

    message.channel.send(embed1212121);
  } else if (blacklist === "Blacklisted") {
    db.set(`blacklist_${targetblacklist.id}`, "Not");
    let embed1212 = new MessageEmbed()
      .setDescription(
        `${targetblacklist} has been unblacklisted by ${message.author.tag}!`
      )
      .setColor("GREEN");

    message.channel.send(embed1212);
  } else {
    db.set(`blacklist_${targetblacklist.id}`, "Not");
    let embed12121 = new MessageEmbed()
      .setDescription(
        `Set up data for ${targetblacklist} by ${message.author.tag}!`
      )
      .setColor("BLUE");

    message.channel.send(embed12121);
  }
};

module.exports.help = {
  name: "blacklist",
  aliases: ["bl"]
};
