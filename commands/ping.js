const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const ws = require("ws");
        let embed100012 = new MessageEmbed()
          .setTitle("**Pinging...**")
          .setFooter(
            `Requested By: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        let msg12121 = await message.channel.send(embed100012);
        let embed2000 = new MessageEmbed()
          .setTitle("Pong!🏓")
          .addField("Response Time", Date.now() - msg12121.createdTimestamp + "ms")
          .addField("Reply Time", Date.now() - message.createdTimestamp + "ms")
          .addField("API Latency", Math.round(bot.ws.ping) + "ms");
        await msg12121.edit(embed2000);
}

module.exports.help = {
  name: "ping",
  aliases: ["pong"]
};
