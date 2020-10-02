const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const { Random } = require("something-random-on-discord");
  const random11 = new Random();

  let data = await random11.getJoke();
  message.channel.send(data);
};

module.exports.help = {
  name: "joke",
  aliases: [""]
};
