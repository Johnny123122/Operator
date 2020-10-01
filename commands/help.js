const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const embed121 = new MessageEmbed()
          .setTitle(`**📷Moderation Commands📷**`)
          .setColor("RANDOM")
          .setDescription(
            "Here's a list of all of my commands listed under the moderation category.\n\n`ban` **Bans the given user, they may not join back unless they're unbanned. **📷\n`unban` **Removes the ban for the user ID given**📷\n`lock` **Updates the permission: SEND_MESSAGES for @everyone in the current channel**📷\n`unlock` **Updates the permission: SEND_MESSAGES for @everyone in the current channel**📷\n`kick` **Kicks the given user, they may join back if granted a new invite.**📷\n`giverole` **Adds the given role id/name to the given user.**📷\n`purge` **Bulk deletes the given number of messages.**📷\n`mute` **Mutes the given user indefintely.**📷\n`unmute` **Unmutes the given user and removes their muted role.**📷\n`warn` **Warns the given user, lets them know they did something wrong**📷\n`role` **Creates/Deletes a role depending on the arguments given**📷\n`setprefix` **Sets the bots prefix for the current guild.**📷\n`userinfo` **Check information on the given user, may be used to find suspicous accounts.**📷\n`slowmode` **Set the slowmode for the current channel**📷"
          )
          .setFooter(
            `Requested by: ${message.author.tag}, Use: ops!feedback to leave some feedback!`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        const embed121212112121 = new MessageEmbed()
          .setTitle(`**😉Fun Commands😉**`)
          .setColor("RANDOM")
          .setDescription(
            "Here's a list of all of my commands listed under the fun category. (Super Fun)\n\n`ping` **Check the bot connectivity with discord's servers**😉\n`say` **Get the avatar of the given user argument or yourself**😉\n`gayrate` **Check the percentage of a user being gay**😉\n`cal` **Conduct a math caculation based on the given arguments**😉\n`meme` **Fetch a meme off redeit and post it within an embed model**😉\n`joke` **Sends a random joke**😉\n`avatar` **Check the bots connectivity with discord's servers**😉\n`trivia` **The bot asks you questions, and you have 15 seconds to answer**😉\n`8ball` **The bot will predict your future (high chance of being roasted)**😉\n`covid` **Check covid stats within the world or a given country**😉\n`serverinfo` **See information within the current guild**😉\n`userinfo` **Check information on the given user, may be used to find suspicous accounts.**😉\n`giveaway` **Create a giveaway that will pick a random winner after the timer**😉"
          )
          .setFooter(
            `Requested by: ${message.author.tag}, Use: ops!feedback to leave some feedback!`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        const embedextra = new MessageEmbed()
          .setTitle(`**🌊Extra Commands🌊**`)
          .setColor("RANDOM")
          .setDescription(
            "Here's a list of all of my commands listed under the extra category. (Super Uniqe)\n\n`poll` **Create a yes or no poll within the given channel**🌊\n`announce` **The bot announces the argument given**🌊\n`report` **Must have a channel called reports, report a user to server staff**🌊\n`emojis` **The bot will send all the emojis on the current guild**🌊\n`stats` **Check the bots servers,and users count along with user stats**🌊\n`dog` **Send a random dog photo**🌊\n`cat` **Send a random cat photo**🌊\n`ticket` **Open a ticket, to contact server support**🌊\n`close` **Close a support ticket, within the current guild**🌊\n`bird` **Send a random bird photo**🌊\n`feedback` **Leave feedback on Operator for the developers**🌊"
          )
          .setFooter(
            `Requested by: ${message.author.tag}, Use: ops!feedback to leave some feedback!`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        let announcement =
          "Want to report a bug, or leave feedback? Use ops!feedback to do so!";
        let embed = new MessageEmbed()
          .setTitle("Help System")
          .setColor("RANDOM")
          .setFooter(
            `Requested by: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField("Tip", announcement)
          .setDescription(
            `Here's all my categories. Use \`ops!help <category>\` for a list of commands within that category. Questions, may be redirected to our support server: https://discord.gg/fSTUtRF\n\n**📷Moderation Commands📷**\nShows all of the commands within Operator listed under the moderation category.\n\n**😉Fun Commands😉**\nShows all of the commands within Operator listed under the fun category. (Super Fun)\n\n**🌊Extra Commands🌊**\nShows all of the commands within Operator that are extra. (Super Uniqe)`
          )
          .addField(
            `Links`,
            `[Invite Me](https://discord.com/oauth2/authorize?client_id=755070612090650714&permissions=201714758&scope=bot) •	[Support Server](https://discord.gg/pXjgDxn) `
          )
          .setFooter(
            `Requested by: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        if (!args[0]) return message.channel.send(embed);
        if (args[0].toLowerCase() == "fun")
          return message.channel.send(embed121212112121);
        if (args[0].toLowerCase() == "moderation")
          return message.channel.send(embed121);
        if (args[0].toLowerCase() == "extra")
          return message.channel.send(embedextra);
        }
module.exports.help = {
  name: "help",
  aliases: ["info"]
};
