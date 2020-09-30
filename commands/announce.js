const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
          return message.reply("You can't use that command!");
        let rChannel = message.mentions.channels.first();
        if (!rChannel)
          return message.channel.send(
            `You did not specify your channel to send the announcement too!`
          );
        console.log(rChannel);
        let MSG = args.join(`${rChannel} `)        
        if (!MSG)
          return message.channel.send(
            `You did not specify your message to send!`
          );
        const _ = new MessageEmbed()
          .setTitle(`New announcement!`)
          .setDescription(`${MSG}`)
          .setColor("RANDOM")
          .setFooter(
            `Announcement by: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        rChannel.send(_);
}

module.exports.help = {
  name: "announce",
  aliases: [""]
};
