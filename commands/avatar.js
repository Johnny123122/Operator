const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let user612;
  if (message.mentions.users.first()) {
    user612 = message.mentions.users.first();
  } else {
    user612 = message.author;
  }
  const member71 = message.guild.member(user612);

  let useravatarembed = new MessageEmbed()
    .setTitle(`${member71.user.tag}'s avatar`)
    .setImage(
      bot.users.cache.get(user612.id).displayAvatarURL({ dynamic: true })
    )
    .setFooter(
      `Requested by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setColor(`RANDOM`);
  message.channel.send(useravatarembed);
};

module.exports.help = {
  name: "avatar",
  aliases: [""]
};
