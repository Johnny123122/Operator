const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const { version: djsversion } = require("discord.js");
        const { version } = require("../package.json");
        const { utc } = require("moment");
        const os = require("os");
        const core = os.cpus()[0];
        const index = require("../index")
        const embed1212 = new MessageEmbed()
          .setTitle("Operator | Stats")
          .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
          .setColor("BLUE")
          .addField("General", [
            `User: ${bot.user.tag} (${bot.user.id})`,
            `Servers: ${bot.guilds.cache.size.toLocaleString()} `,
            `Users: ${bot.users.cache.size.toLocaleString()}`,
            `Channels: ${bot.channels.cache.size.toLocaleString()}`,
            `Creation Date: 14th September 2020, 14:21`,
            `Node.js: ${process.version}`,
            `Version: v${version}`,
            `Discord.js: v${djsversion}`,
            "\u200b"
          ])
          .addField("System", [
            `Platform: ${process.platform}`,
            `CPU:`,
            `\u3000 Cores: ${os.cpus().length}`,
            `\u3000 Model: ${core.model}`,
            `\u3000 Speed: ${core.speed}MHz`
          ])
          .setFooter(
            "Requested by: " + message.author.tag,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp();
        message.channel.send(embed1212);
}

module.exports.help = {
  name: "stats",
  aliases: [""]
};
