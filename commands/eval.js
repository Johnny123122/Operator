const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (message.member.id != 700096978796937267)
          return message.reply("You can't use that command!");
        try {
          const date = new Date();
          const input = args.join(" ");
          let output = eval(input);
          if (typeof output !== "string") {
            output = require("util").inspect(output);
          }

          const embed123 = new MessageEmbed()
            .setAuthor("Test Code", "https://i.imgur.com/hyS5l2c.png")
            .addField("📥 Input", "```js\n" + input + "\n```")
            .addField("📤 Output", "```js\n" + output + "\n```")
            .setColor("GREEN")
            .setFooter("Executed")
            .setTimestamp();
          const hiddenembed = new MessageEmbed()
            .setColor("RED")
            .setTitle("Evaluation hidden by evaluator.");

          const reply12 = await message.channel.send(embed123);
          await reply12.react("❌");

          const filter = (reaction, user) =>
            reaction.emoji.name === "❌" && user.id == message.author.id;
          reply12
            .createReactionCollector(filter, { maxMatches: 1 })
            .on(
              "collect",
              async () =>
                (await reply12.edit(hiddenembed)) &&
                reply12.reactions.removeAll()
            );
        } catch (err) {
          const embed1234 = new MessageEmbed()
            .setAuthor("Test Code", "https://i.imgur.com/hyS5l2c.png")
            .addField("❌ Error", "`" + err + "`")
            .setColor("RED")
            .setFooter("Executed")
            .setTimestamp();
          const hiddenembe1 = new MessageEmbed()
            .setColor("RED")
            .setTitle("Evaluation hidden by evaluator.");

          const reply123 = await message.channel.send(embed1234);
          await reply123.react("❌");

          const filter = (reaction, user) =>
            reaction.emoji.name === "❌" && user.id == message.author.id;
          reply123
            .createReactionCollector(filter, { maxMatches: 1 })
            .on("collect", async () => await reply123.edit(hiddenembe1) && reactions.removeAll());
        }
}

module.exports.help = {
  name: "eval",
  aliases: [""]
};