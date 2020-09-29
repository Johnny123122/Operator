const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const randomPuppy = require("random-puppy");
        const subReddits = ["me_irl", "dankmeme"];
        const random =
          subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
        const message1 = await message.channel.send('Fetching a Meme...')

        const embed2 = new MessageEmbed()
          .setImage(img)
          .setTitle(`Here's your meme!`)
          .setColor("RANDOM")
          .setFooter(
            `Reuested by: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );

        message1.edit({embed: embed2});
      }

module.exports.help = {
  name: "meme",
  aliases: [""]
};