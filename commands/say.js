const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (args.includes("@everyone"))
    return message.reply("I won't repeat a message with a here ping in it!");
  if (args.includes("@here"))
    return message.reply(
      "I won't repeat a message with a everyone ping in it!"
    );
  if (args.length > 0)
    message.channel.send(
      `Said by: ${message.author.tag}\n\n**${args.join(" ")}**`
    );
  else
    message.reply("You did not send a message to repeat, cancelling command.");
};

module.exports.help = {
  name: "say",
  aliases: ["repeat"]
};
