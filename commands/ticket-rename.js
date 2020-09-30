const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const db = require('quick.db')
      const { guild, member } = message
    const guildId = guild.id
    const memberId = member.id
    let UserHasTicket = db.fetch(`ticket_${memberId}_${guildId}`);
    if (UserHasTicket === message.channel.id) return message.channel.setName(args.join(" ")) && message.delete({timeout: 5000})
    const notticket = new MessageEmbed()
    .setDescription('This isn\'t a ticket!')
    message.channel.send(`<@!${message.author.id}>`, {embed: notticket})
}

module.exports.help = {
  name: "rename",
  aliases: [""]
};