const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const guytorate = message.mentions.members.first();
  if (!guytorate)
    return message.channel.send("You never mentioned who I need to gayrate!");
  const howgay = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const urmom1 = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Gay Rate Machine`)
    .setDescription(`${guytorate.user} is ${howgay}% gay:gay_pride_flag:`)
    .setTimestamp()
    .setFooter(
      `Requested by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(urmom1);
};

module.exports.help = {
  name: "gayrate",
  aliases: ["howgay"]
};
