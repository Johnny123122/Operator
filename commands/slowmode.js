const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return Message.reply("You don't have permission to use that command!"   );
        if (!args[0])
          return message.channel.send(
            `You did not specify the time in seconds you wish to set this channel's slow mode too!`
          );
        if (isNaN(args[0]))
          return message.channel.send(`That is not a number!`);
        let reason1111 = message.content.slice(
          prefix12.length + 9 + args[0].length + 1
        );
        if (!reason1111) {
          reason1111 = "No reason provided!";
        }
        message.channel.setRateLimitPerUser(args[0], reason1111);
        message.channel.send(
          `Set the slowmode of this channel too **${
            args[0]
          }** with the reason: **${reason1111}**`
        );
}

module.exports.help = {
  name: "slowmode",
  aliases: [""]
};
