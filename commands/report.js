const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
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
    let Avatar = User.message.author.displayAvatarURL({ dynamic: true });
    let Channel = message.guild.channels.cache.find(
      ch => ch.name === "reports"
    );
    if (!Channel)
      return message.channel.send(
        `There is no channel in this guild which is called \`reports\``
      );
    message.react("✅");
    let Embed122 = new MessageEmbed()
      .setTitle(`New report!`)
      .setDescription(
        `\`${message.author.tag}\` has reported the user \`${User.tag}\`! `
      )
      .setColor(`RED`)
      .setThumbnail(Avatar)
      .addFields(
        {
          name: "Reporter ID",
          value: `${message.author.id}`,
          inline: true
        },
        {
          name: "Reporter Tag",
          value: `${message.author.tag}`,
          inline: true
        },
        { name: "Reported ID", value: `${User.id}`, inline: true },
        { name: "Reported Tag", value: `${User.tag}`, inline: true },
        { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
        {
          name: "Date (M/D/Y)",
          value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: true
        }
      );
    Channel.send(Embed122);
  }
};

module.exports.help = {
  name: "report",
  aliases: [""]
};
