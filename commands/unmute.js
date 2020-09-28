const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) {
          return message.channel.send(
            "You are not allowed to run that command."
          );
        }

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
          return message.channel.send(
            "I do not have permission to manage roles."
          );
        }
        const user1 = message.mentions.members.first();

        if (!user1) {
          return message.channel.send("Please specify a valid user to unmute.");
        }
        let muterole1 = message.guild.roles.cache.find(x => x.name === "Muted");

        if (user1.roles.cache.has(muterole1)) {
          return message.channel.send("Given user isn't muted.");
        }

        user1.roles.remove(muterole1);

        await message.channel.send(
          `**${message.mentions.users.first().tag}** is unmuted`
        );

        user1.send(`You are now unmuted in **${message.guild.name}!**`);
}

module.exports.help = {
  name: "unmute",
  aliases: [""]
};
