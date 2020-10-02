const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const randomstring = require("randomstring");
  const db = require("quick.db");
  let numbers = randomstring.generate({
    length: 3,
    charset: "numeric"
  });
  let subject = args.join(" ");
  if (!subject) subject = "No subject provided.";
  const supportembed = new MessageEmbed()
    .setTitle("Hello, " + message.author.tag + "! (Ticket: " + numbers + ")")
    .setDescription(
      "Thank you for contacting **__" +
        message.guild.name +
        "__**'s Support Team!\n\nI advise you right down your full reasoning to opening this ticket as it will make it easier for the operator who assists you."
    )
    .addField("Subject", subject);
  const { guild, member } = message;
  const guildId = guild.id;
  const memberId = member.id;
  let UserHasTicket = db.fetch(`ticket_${member}_${guildId}`);
  if (UserHasTicket != null)
    return message.reply("You already have an open ticket within this guild!");
  message.reply("You have been tagged in a channel, please check it.");

  const role = guild.roles.cache.find(role => {
    return role.name === "@everyone";
  });

  const category = guild.channels.cache.find(channel => {
    return channel.name === "Support Tickets" && channel.type == "category";
  });

  const newChannel = await guild.channels.create(
    `ticket-${message.author.id}`,
    {
      parent: category,
      permissionOverwrites: [
        {
          id: role.id,
          deny: ["VIEW_CHANNEL"]
        },
        {
          id: memberId,
          allow: ["VIEW_CHANNEL"]
        }
      ]
    }
  );
  newChannel.send("<@!" + memberId + ">", { embed: supportembed });
  db.set(`ticket_${message.author.id}_${guildId}`, newChannel.id);
  db.set(`ticket_${newChannel.id}`, true);
};

module.exports.help = {
  name: "ticket",
  aliases: ["asd"]
};
