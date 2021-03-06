const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const db = require("quick.db");
  const { guild, member } = message;
  const guildId = guild.id;
  const memberId = member.id;
  let UserHasTicket = db.fetch(`ticket_${message.channel.id}`);
  if (UserHasTicket === true)
    return (
      db.delete(`ticket_${message.channel.id}`) &&
      db.delete(
        `ticket_${message.channel.name.split("ticket-")}_${guild.id}`
      ) &&
      message.channel.send("This channel will be deleted in 1 second!") &&
      message.channel.delete()
    );
  const notticket = new MessageEmbed().setDescription("This isn't a ticket!");
  message.channel.send(`<@!${message.author.id}>`, { embed: notticket });
};

module.exports.help = {
  name: "close",
  aliases: [""]
};
