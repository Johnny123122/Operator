const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id) {
          return bot.emojis.cache.get(id).toString();
        }
        message.guild.emojis.cache.forEach(emoji => {
          OverallEmojis++;
          if (emoji.animated) {
            Animated++;
            EmojisAnimated += Emoji(emoji.id);
          } else {
            EmojiCount++;
            Emojis += Emoji(emoji.id);
          }
        });
        let Embed22222222222 = new MessageEmbed()
          .setTitle(`Emojis in ${message.guild.name}.`)
          .setDescription(
            `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`
          )
          .setColor(`RANDOM`);
        message.channel.send(Embed22222222222);
        if (error) {
          message.channel.send(`This guild has to many emojis to list!`);
        }
}

module.exports.help = {
  name: "emojis",
  aliases: [""]
};
