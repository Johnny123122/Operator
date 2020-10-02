const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel
      .send(`You do not have MANAGE_ROLES permission`)
      .then(m => m.delete({ timeout: 15000 }));

  if (!args[0] || !args[1])
    return message.channel
      .send("Incorrect usage, It's `<username || user id> <role name || id>`")
      .then(m => m.delete({ timeout: 15000 }));

  try {
    const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    const roleName = message.guild.roles.cache.find(
      r =>
        r.name === args[1].toString() ||
        r.id === args[1].toString().replace(/[^\w\s]/gi, "")
    );

    const alreadyHasRole = member._roles.includes(roleName.id);

    if (alreadyHasRole)
      return message.channel
        .send("User already has that role")
        .then(m => m.delete({ timeout: 15000 }));

    const embed12121 = new MessageEmbed()
      .setTitle(`Role added!`)
      .setDescription(
        `${message.author} has  given the role ${roleName} to ${member.user}`
      )
      .setColor("RANDOM")
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
      .setFooter(
        `Given By: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    return member.roles
      .add(roleName)
      .then(() => message.channel.send(embed12121));
  } catch (e) {
    return message.channel
      .send("The role provided doens't exist!")
      .then(m => m.delete({ timeout: 15000 }))
      .then(() => console.log(e));
  }
};

module.exports.help = {
  name: "giverole",
  aliases: [""]
};
