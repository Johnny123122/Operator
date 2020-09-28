const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (!message.member.hasPermission(`MANAGE_CHANNELS`))
          return message.reply(`You can't use that command!`);
        const channels1 = message.guild.channels.cache.get(message.channel.id);
        const embedunlock = new MessageEmbed()
          .setDescription(
            `${message.author} sucessfully unlocked channel: ${channels1}!`
          )
          .setColor(`GREEN`);
        channels1.updateOverwrite(message.guild.roles.everyone, {
          SEND_MESSAGES: true
        });
        return message.channel.send(embedunlock);
}

module.exports.help = {
  name: "unlock",
  aliases: [""]
};
