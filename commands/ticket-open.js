const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const db = require('quick.db')
      let subject = args.join(" ")
    if (!subject) subject = 'No subject provided.'
      const supportembed = new MessageEmbed()
    .setTitle('Hello, ' + message.author.tag + '!')
    .setDescription('Thank you for contacting **__' + message.guild.name + '__**\'s Support Team!\n\nI advise you right down your full reasoning to opening this ticket as it will make it easier for the operator who assists you.')
    .addField('Subject', subject)
      const { guild, member } = message
    const guildId = guild.id
    const memberId = member.id
    let UserHasTicket = db.fetch(`ticket_${memberId}_${guildId}`);
    if (UserHasTicket != null) return message.reply('You already have an open ticket within this guild!');
    message.reply('You have been tagged in a channel, please check it.')

    const role = guild.roles.cache.find((role) => {
      return role.name === '@everyone'
    })

    const category = guild.channels.cache.find((channel) => {
      return channel.name === 'Support Tickets' && channel.type == "category"
    })

    let numbers = randomstring.generate({
        length: 5,
        charset: 'numeric'
      });

    const newChannel = await guild.channels.create(`ticket-${numbers}`, {
      parent: category, 
      permissionOverwrites: [
        {
          id: role.id,
          deny: ['VIEW_CHANNEL'],
        },
        {
          id: memberId,
          allow: ['VIEW_CHANNEL'],
        },
      ],
    })
    newChannel.send('<@!' + memberId + '>', {embed: supportembed})
    db.set(`ticket_${message.author.id}_${guildId}`, newChannel.id)
}

module.exports.help = {
  name: "ticket",
  aliases: ["asd"]
};