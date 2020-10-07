const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply("You can't use that command!")
        if (!args[0]) return message.reply('You must mention the person who you want to nickname!')
        if (!args[1]) return message.reply('You must mention the nickname!')
        args.shift()
        const nicknamechange = args.join(" ")
  const user12 = message.mentions.users.first()
  const member = message.guild.members.cache.get(user12.id)
  const embed11 = new MessageEmbed()
  .setColor('GREEN')
  .setTitle('Nickname Changed!')
  .setDescription(`I changed ${user12.tag}'s nickname to: ${nicknamechange}!`)
  .setFooter('Responsible Mod: ' + message.author.tag, message.author.displayAvatarURL({dynamic: true}))
  member.setNickname(nicknamechange, `Responsible Mod: ${message.author.tag}`).catch(err => {
    message.channel.send(`I failed to change ${user12.tag}'s nickname, please check my permissions and try again!`)
  });
  if (member.nickname === nicknamechange) return message.channel.send(embed11)
}

module.exports.help = {
  name: "nickname",
  aliases: [""]
};
