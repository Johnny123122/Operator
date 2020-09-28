const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message.reply("You can't use that comamnd!");
        message.channel.bulkDelete(100);
}

module.exports.help = {
  name: "nuke",
  aliases: [""]
};
