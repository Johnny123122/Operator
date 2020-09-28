const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message.channel.send("You can't use that command!");

        let member2 = message.mentions.members.first(); //We specify the member we wish to kick.
        if (!member2)
          return message.channel.send("Please specify a valid user."); //If we don't specify a user, nor enter a valid user, it will will respond, letting us know to type a valid user.
        if (!member2.bannable)
          //This checks if the user can be banned, if their permissions don't enable them to get banned, such as Admins, it will let you know it can't ban them.
          return message.channel.send("Unable to vibecheck specified user.");

        let reason2 = args.slice(1).join(" "); //Here we specify the reason they got kicked, it is optional, but it helps for mod logs.
        if (!reason2) reason2 = "No reason provided.";
        member2.send(
          `You've been vibechecked from ${message.guild.name}, with reason ${reason2}!`
        );
        await message.guild.members
          .ban(member2, { reason: reason2 })
          .catch(err => console.log(err));
        let embed7723 = new MessageEmbed()
          .setTitle(`Vibecheck Complete!`)
          .setDescription(`Banned: ${member2}, With reason: ${reason2}`)
          .setImage("https://i.imgflip.com/3jy2cq.jpg")
          .setColor("GREEN")
          .setFooter(
            `Vibechecked by: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        let embed3 = new MessageEmbed()
          .setTitle(`Vibechecking...`)
          .setDescription(`Banning: ${member2}`)
          .setColor("RED")
          .setFooter(
            `Vibechecked by: ${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true })
          );
        await message.channel.send(embed3).then(sentEmbed => {
          sentEmbed.edit(embed7723);
        });
}

module.exports.help = {
  name: "vibecheck",
  aliases: ["kill"]
};
