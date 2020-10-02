const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let embedssd = new MessageEmbed()
    .setAuthor(
      `${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setColor("GREEN")
    .setTitle("Operator's Development Team:")
    .setThumbnail(
      "https://cdn.discordapp.com/avatars/700096978796937267/a_e11507e4f84c19beedcafb5395caab44.gif?size=128"
    )
    .setDescription("Operator is developed and managed by: Excel#0666");
  message.channel.send(embedssd);
};

module.exports.help = {
  name: "developers",
  aliases: ["devs"]
};
