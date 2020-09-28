const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
          return message.reply(`You can't use this command!`);
        const channel1 = message.mentions.channels.first();
        if (!channel1) {
          return message.channel.send(
            `You did not mention the channel you want the poll to take place in!`
          );
        }
        let question = message.content
          .split(`${prefix12}poll ${channel1}`)
          .join(" ");
        if (!question)
          return message.channel.send(`You did not specify your question!`);
        let embed9 = new MessageEmbed()
          .setTitle(`New poll!`)
          .setDescription(`${question}`)
          .setFooter(
            `Poll By: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setColor(`RANDOM`);
        let messagee = await client.channels.cache
          .get(channel1.id)
          .send(embed9);
        await messagee.react("👍");
        await messagee.react("👎");
}

module.exports.help = {
  name: "poll",
  aliases: [""]
};
