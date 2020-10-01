const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args, prefix12) => {
        let feedback_message = message.content
          .split(`${prefix12}feedback `).join("");
        if (!feedback_message) {
          return message.reply(
            "You didn't provide the feedback you want to send!"
          )}
        message.reply(
          "Thanks for your feedback, my developers will review it when they get a chance!"
        );

        let embed7771 = new MessageEmbed()
          .setColor("BLUE")
          .setTitle("New feedback!")
          .setDescription(`${message.author.tag} sent in some feedback!`)
          .addField("They sent the following feedback", feedback_message)
          .setThumbnail(message.author.displayAvatarURL())
          .setFooter(
            `Sent By: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        bot.channels.cache.get("761196312062328864").send(embed7771);
        bot.users.cache.get("700096978796937267").send(embed7771);
}

module.exports.help = {
  name: "feedback",
  aliases: [""]
};
