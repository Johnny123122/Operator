const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const db = require('quick.db')
      const { guild, member } = message
    const guildId = guild.id
    const memberId = member.id
    const channel = message.channel
    let UserHasTicket = db.fetch(`ticket_${memberId}_${guildId}`);
    if (UserHasTicket === message.channel.id) return db.delete(`ticket_${memberId}_${guildId}`) && message.channel.send('This channel will be deleted in 1 second!') && message.channel.delete()
}

module.exports.help = {
  name: "close",
  aliases: [""]
};