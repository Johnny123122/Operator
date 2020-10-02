const { Discord, MessageEmbed, Message } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You don't have permission to use that!");
  const args1234 = message.content.split(" ").slice(1);
  const amount1 = args1234.join(" ");

  if (!amount1)
    return message.reply(
      "You haven't given an amount of messages which should be deleted!"
    );
  if (isNaN(amount1))
    return message.reply("The amount parameter isn`t a number!");

  if (amount1 > 100)
    return message.reply("You can`t delete more than 100 messages at once!");
  if (amount1 < 1) return msg.reply("You have to delete at least 1 message!");
  message.delete();

  await message.channel.messages.fetch({ limit: amount1 }).then(messages => {
    message.channel.bulkDelete(messages);
    const embed = new MessageEmbed()
      .setTitle("Purge Complete!")
      .setDescription(
        "I've sucessfully purged " +
          amount1 +
          " messages!\n This message will automatically be deleted within 5 seconds."
      )
      .setThumbnail(
        "https://o.remove.bg/downloads/1cb94cb5-0442-4ee8-916e-df0dcb990ac9/image-removebg-preview.png"
      )
      .setFooter(
        `Purge Conducted by: ${message.author.id}`,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send({ embed: embed });
  });
};

module.exports.help = {
  name: "purge",
  aliases: ["clear"]
};
