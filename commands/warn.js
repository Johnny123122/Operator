const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  var embedColor = "GREEN";

  var missingPermissionsEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setFooter(
      `Message by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTitle("Insufficient Permissions!")
    .setDescription(
      "You need the `MANAGE_MESSAGES` permission to use this command!"
    )
    .setTimestamp();
  var missingArgsEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setFooter(
      `Message by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTitle("Missing Arguments!")
    .setDescription("Usage: `warn [user-mention] [Reason]`")
    .setTimestamp();
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(missingPermissionsEmbed);
  let wUser = message.mentions.users.first();
  if (!wUser) return message.channel.send(missingArgsEmbed);
  let reason11 = args.slice(1).join(" ");
  if (!reason11) return message.channel.send(missingArgsEmbed);
  if (wUser.id == 700096978796937267)
    return message.reply(`You are unable to warn the bot developer!`);
  var warningEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setTitle(`You've been warned in ${message.guild.name}`)
    .addField("Moderator", message.author.tag)
    .addField("Reason", reason11)
    .setFooter(
      `Warned by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTimestamp();
  wUser.send(warningEmbed);
  var warnSuccessfulEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setTitle("User Successfully Warned!")
    .setFooter(
      `Warning by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  message.channel.send(warnSuccessfulEmbed);
  message.delete();
};

module.exports.help = {
  name: "warn",
  aliases: [""]
};
