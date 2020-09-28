const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const randomPuppy = require("random-puppy");
        const subReddits = ["me_irl", "dankmeme"];
        const random =
          subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);

        const embed2 = new MessageEmbed()
          .setImage(img)
          .setTitle(`Here's your meme!`)
          .setDescription("Memes provided by me_irl and dankmeme")
          .setColor("RANDOM")
          .setFooter(
            `Reuested by: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );

        message.channel.send(embed2);}

module.exports.help = {
  name: "meme",
  aliases: [""]
};
