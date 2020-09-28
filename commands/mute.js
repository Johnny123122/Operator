const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
          return message.channel.send(
            "Sorry but you do not have permission to mute anyone"
          );
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
          return message.channel.send(
            "I do not have permission to manage roles."
          );
        }
        const user = message.mentions.members.first();

        if (!user) {
          return message.channel.send(
            "Please mention the member to who you want to mute"
          );
        }

        if (user.id === message.author.id) {
          return message.channel.send("You can't mute yourself.");
        }

        let reason3 = args.slice(1).join(" ");

        if (!reason3) {
          return message.channel.send(
            "Please Give the reason to mute the member"
          );
        }

        let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

        if (!muterole) {
          return message.channel.send(
            "This server do not have role with name `Muted`"
          );
        }
        if (user.roles.cache.has(muterole)) {
          return message.channel.send("Given User is already muted");
        }
        user.roles.add(muterole);

        await message.channel.send(
          `You muted **${
            message.mentions.users.first().tag
          }** For \`${reason3}\``
        );

        user.send(
          `You are muted in **${message.guild.name}** For \`${reason3}\``
        );
}

module.exports.help = {
  name: "mute",
  aliases: [""]
};
