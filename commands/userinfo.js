const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const moment121 = require("moment");

        let user6;
        if (message.mentions.users.first()) {
          user6 = message.mentions.users.first();
        } else {
          user6 = message.author;
        }

        const member7 = message.guild.member(user6);

        const embed8 = new MessageEmbed()
          .setColor("RANDOM")
          .setThumbnail(
            bot.users.cache.get(user6.id).displayAvatarURL({ dynamic: true })
          )
          .addField(`${user6.tag}`, `${user6}`, true)
          .addField("ID:", `${user6.id}`, true)
          .addField(
            "Nickname:",
            `${member7.nickname !== null ? `${member7.nickname}` : "None"}`,
            true
          )
          .addField("Status", `${user6.presence.status}`, true)
          .addField("In Server", message.guild.name, true)
          .addField(
            "Game",
            `${user6.presence.game ? user6.presence.game.name : "None"}`,
            true
          )
          .addField("Bot", `${user6.bot ? user6.bot : "No"}`, true)
          .addField(
            "Joined The Server On",
            `${moment121.utc(member7.joinedAt).format("dddd, MMMM Do YYYY")}`,
            true
          )
          .addField(
            "Account Created On",
            `${moment121.utc(user6.createdAt).format("dddd, MMMM Do YYYY")}`,
            true
          )
          .addField(
            "Roles:",
            member7.roles.cache.map(roles => `${roles}`).join(", "),
            true
          )
          .setFooter(
            `Requested by ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        message.channel.send(embed8);
}

module.exports.help = {
  name: "userinfo",
  aliases: ["whois"]
};
