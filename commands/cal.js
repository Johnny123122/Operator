const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const math = require("discord-math");
        let num1 = Number(args[0]);
        let operation = args[1];
        let num2 = Number(args[2]);
        try {
          const embed7712 = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("Caculation Sucessful!")
            .setFooter(
              `Caculation by: ${message.author.tag}`,
              message.author.displayAvatarURL({ dynamic: true })
            )
            .addField("Answer", math.calculate(num1, operation, num2))
            .setTimestamp();
          const hiddenembed1 = new MessageEmbed()
            .setColor("RED")
            .setTitle("Caculation hidden by caculator.");

          const reply122 = await message.channel.send(embed7712);
          await reply122.react("❌");

          const filter1111 = (reaction, user) =>
            reaction.emoji.name === "❌" && user.id == message.author.id;
          reply122
            .createReactionCollector(filter1111, { maxMatches: 1 })
            .on(
              "collect",
              async () =>
                (await reply122.edit(hiddenembed1)) &&
                reply122.reactions.removeAll()
            );
        } catch (err) {
          const embed12341 = new MessageEmbed()
            .setAuthor("Caculation", "https://i.imgur.com/hyS5l2c.png")
            .addField("❌ Error", "`" + err + "`")
            .setColor("RED")
            .setFooter("Executed")
            .setTimestamp();
          const hiddenembe1 = new MessageEmbed()
            .setColor("RED")
            .setTitle("Caculation hidden by caculator.");
          const reply12231 = await message.channel.send(embed12341);
          await reply12231.react("❌");

          const filter12121 = (reaction, user) =>
            reaction.emoji.name === "❌" && user.id == message.author.id;
          reply12231
            .createReactionCollector(filter12121, { maxMatches: 1 })
            .on(
              "collect",
              async () =>
                (await reply12231.edit(hiddenembe1)) &&
                reply12231.reactions.removeAll()
            );
        }
}

module.exports.help = {
  name: "cal",
  aliases: [""]
};
