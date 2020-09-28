const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    return message.reply(`You do not have perms to ban someone`);
  }

  const target = message.mentions.members.first() 

  if (!target) {
    return message.reply(`Please mention the person who you want to ban.`);
  }

  if (target.hasPermission("MANAGE_SERVER")) {
    return message.reply("That user is a mod/admin I can't do that!")
  }

  if (target.id === message.author.id) {
    return message.reply(`You can't ban yourself, are you crazy?!`);
  }

  if (target.id == 752505054573101190) {
    return message.reply("I won't ban myself!")
  }

  if (!args[1]) {
    return message.reply(`Please Give Reason To ban Member`);
  }

  let embed1212121212121212 = new MessageEmbed()
    .setTitle(`Sucessfully banned ${target.user.tag}`)
    .setColor("GREEN");
  let reason121212121121 = args.slice(1).join(" "); //Here we specify the reason they got kicked, it is optional, but it helps for mod logs.
  if (!reason121212121121) reason121212121121 = "No reason provided."; //If they don't specify a reason, we automatically set the reason as "No reason provided."

  message.channel.send(embed1212121212121212);
  message.guild.members
    .ban(target, { reason: reason121212121121 })
    .catch(err => console.log(err));
}

module.exports.help = {
  name: "ban",
  aliases: [""]
};
