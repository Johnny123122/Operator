const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const fetch121121 = require("node-fetch");

        const subreddits1 = ["dog", "dogs", "dogpics", "puppies"];
        const data1211 = await fetch121121(
          `https://imgur.com/r/${
            subreddits1[Math.floor(Math.random() * subreddits1.length)]
          }/hot.json`
        )
          .then(response => response.json())
          .then(body => body.data);
        const selected1 = data1211[Math.floor(Math.random() * data1211.length)];
        return message.channel.send(
          new MessageEmbed()
            .setImage(
              `https://imgur.com/${selected1.hash}${selected1.ext.replace(
                /\?.*/,
                ""
              )}`
            )
            .setTitle("Woof!")
            .setColor("RANDOM")
            .setFooter(
              `Requested By: ${message.author.tag}`,
              message.author.displayAvatarURL({ dynamic: true })
            )
        );
}

module.exports.help = {
  name: "dog",
  aliases: [""]
};
