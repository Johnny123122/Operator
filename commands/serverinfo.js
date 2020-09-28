const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const { guild } = message;
        const { name, region, memberCount, owner, afkTimeout } = guild;
        const icon = guild.iconURL({ dynamic: true });
        const moment125 = require("moment");
        const members = message.guild.members.cache;
        const filterLevels = {
          DISABLED: "Off",
          MEMBERS_WITHOUT_ROLES: "No Role",
          ALL_MEMBERS: "Everyone"
        };

        const verificationLevels = {
          NONE: "None",
          LOW: "Low",
          MEDIUM: "Medium",
          HIGH: "(╯°□°）╯︵ ┻━┻",
          VERY_HIGH: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"
        };

        const embed652 = new MessageEmbed()
          .setAuthor(name, icon)
          .setColor("RANDOM")
          .setTitle("Server Info")
          .addField("Owner", owner.user.tag, true)
          .addField("Region", region, true)
          .addField("Members", memberCount, true)
          .addField(
            "Server Created",
            moment125.utc(guild.createdAt).format("dddd, MMMM Do YYYY"),
            true
          )
          .addField("Server ID", guild.id, true)
          .addField(
            "Boosts",
            message.guild.premiumSubscriptionCount || "0",
            true
          )
          .addField("Roles", message.guild.roles.cache.size, true)
          .addField("Channels", message.guild.channels.cache.size, true)
          .addField("Emojis", message.guild.emojis.cache.size, true)
          .addField(
            "Verification Level",
            verificationLevels[message.guild.verificationLevel],
            true
          )
          .addField(
            "Explicit Filter",
            filterLevels[message.guild.explicitContentFilter],
            true
          )
          .addField(
            "Online Users",
            members.filter(member => member.presence.status === "online").size,
            true
          )
          .addField(
            "Do Not Disturb Users",
            members.filter(member => member.presence.status === "dnd").size,
            true
          )
          .addField(
            "Idle Users",
            members.filter(member => member.presence.status === "idle").size,
            true
          )
          .addField(
            "Offline Users",
            members.filter(member => member.presence.status === "offline").size,
            true
          )
          .addField("AFK Timeout", afkTimeout / 60, true)
          .setFooter(
            `Requested by: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp();
        message.channel.send(embed652);
}

module.exports.help = {
  name: "serverinfo",
  aliases: ["guildinfo"]
};
