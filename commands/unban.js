const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission(`BAN_MEMBERS`))
    return message.reply(`You can't use this command!`);
  let userID = args[0];
  message.guild.fetchBans().then(bans => {
    if (bans.size == 0) return;
    let bUser = bans.find(b => b.user.id == userID);
    if (!bUser) return message.reply(`The User ID you entered isn't valid!`);
    message.guild.members.unban(bUser.user);
    const unbanconfirmation = new MessageEmbed()
      .setTitle(
        `${bot.users.cache.get(userID).tag} has sucessfully been unbanned!`
      )
      .setColor("GREEN");
    message.channel.send(unbanconfirmation);
  });
};

module.exports.help = {
  name: "unban",
  aliases: [""]
};