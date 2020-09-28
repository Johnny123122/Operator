const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const fetch121 = require("node-fetch");

        const subreddits = ["cat", "cats", "catpics", "kittens"];
        const data121 = await fetch121(
          `https://imgur.com/r/${
            subreddits[Math.floor(Math.random() * subreddits.length)]
          }/hot.json`
        )
          .then(response => response.json())
          .then(body => body.data);
        const selected = data121[Math.floor(Math.random() * data121.length)];
        return message.channel.send(
          new MessageEmbed()
            .setImage(
              `https://imgur.com/${selected.hash}${selected.ext.replace(
                /\?.*/,
                ""
              )}`
            )
            .setTitle("Purr!")
            .setColor("RANDOM")
            .setFooter(
              `Requested By: ${message.author.tag}`,
              message.author.displayAvatarURL({ dynamic: true })
            )
        );
}

module.exports.help = {
  name: "cat",
  aliases: [""]
};
