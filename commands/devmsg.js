const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (message.member.id != 700096978796937267)
          return message.reply("You can't use that command!");
        let message112121212 = args.join(" ");
        if (!message112121212)
          return message.reply(
            "C'mon you're my dev you should know to put the input!"
          );
        const embed12122 = new MessageEmbed()
          .setColor("BLUE")
          .setTitle("Announcement By Operator's Developer")
          .setDescription(
            "**" +
              message112121212 +
              "**\nSincerely, Operator's Developer Excel#4599"
          )
          .setFooter(
            `Invite the bot to your server, by using ops!invite!`,
            bot.user.displayAvatarURL()
          );
        message.channel.send(embed12122);
}

module.exports.help = {
  name: "devmessage",
  aliases: [""]
};
