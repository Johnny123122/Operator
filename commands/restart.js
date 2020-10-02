const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (message.member.id != 700096978796937267)
    return message.reply("You can't use that command!");
  message.channel.send("Destroying the client, and re-logging in.");
  client.destroy();
  client.login(process.env.token);
};

module.exports.help = {
  name: "restart",
  aliases: [""]
};
