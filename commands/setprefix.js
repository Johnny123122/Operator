const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const dbdbd = require("quick.db");
        if (!message.member.hasPermission("ADMINISTRATOR")) {
          return message.channel.send(
            "You are not allowed or do not have permission to change prefix"
          );
        }

        if (!args[0]) {
          return message.channel.send(
            "Please give the prefix that you want to set"
          );
        }

        if (args.join(" ") === "default") {
          dbdbd.delete(`prefix_${message.guild.id}`);
          return await message.channel.send("Set the prefix to default: ops!");
        }

        if (args[1]) {
          return message.channel.send(
            "You can not set prefix a double argument"
          );
        }

        if (args[0].length > 5) {
          return message.channel.send(
            "You can not send prefix more than 3 characters"
          );
        }

        dbdbd.set(`prefix_${message.guild.id}`, args[0]);
        await message.channel.send(
          `Set the current guilds prefix to: ${args[0]}`
        );
}

module.exports.help = {
  name: "setprefix",
  aliases: [""]
};
