const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.reply(`You can't use that command!`);
  }
  const channels = message.guild.channels.cache.get(message.channel.id);
  const embedlock = new MessageEmbed()
    .setDescription(
      `${message.author} sucessfully locked channel: ${channels}!`
    )
    .setColor(`RED`);
  channels.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false
  });
  return message.channel.send(embedlock);
};

module.exports.help = {
  name: "lock",
  aliases: [""]
};
