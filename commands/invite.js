const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        let embed23 = new MessageEmbed()
          .setColor("GREEN")
          .setTitle("Invite the bot to your server!")
          .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
          .setURL(
            "https://discord.com/oauth2/authorize?client_id=755070612090650714&permissions=201714758&scope=bot"
          )
          .setDescription("Join the support server: https://discord.gg/pXjgDxn")
          .setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        message.channel.send(embed23);
}

module.exports.help = {
  name: "invite",
  aliases: [""]
};
