const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS"))
    //Checks if user has permission to run the command.
    return message.channel.send("You are not allowed to run that command.");

  let member12 =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]); //We specify the member we wish to kick.
  if (!member12) return message.channel.send("Please specify a valid user."); //If we don't specify a user, nor enter a valid user, it will will respond, letting us know to type a valid user.
  if (!member12.kickable)
    return message.channel.send("Unable to kick specified user.");

  if (member12.hasPermission("ADMINISTRATOR"))
    return message.reply("That user is a mod/admin I can't do that!");
  if (member12.id == message.author.id)
    return message.reply("You can't kick yourself!");
  let reason121212121 = args.slice(1).join(" "); //Here we specify the reason they got kicked, it is optional, but it helps for mod logs.
  if (!reason121212121) reason121212121 = "No reason provided."; //If they don't specify a reason, we automatically set the reason as "No reason provided."
  const yesorno = new MessageEmbed()
    .setColor("BLUE")
    .setTitle(`Are you sure you'd like to kick ${member12.user.tag}?`)
    .setDescription(
      `React with ✅ or ❌ within the next 15 seconds confirming you\'d like to kick <@${member12.id}> !`
    )
    .setFooter(
      `Caused by: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  const kickyes = new MessageEmbed()
    .setTitle(`${member12.user.tag} has been sucessfully kicked!`)
    .setColor("GREEN");
  const kickno = new MessageEmbed()
    .setColor("RED")
    .setTitle(`Cancelled the kick with target ${member12.user.tag}`);
  const reply123 = await message.reply(yesorno);
  await reply123.react("✅");
  await reply123.react("❌");
  const filter1 = (reaction, user) =>
    reaction.emoji.name === "✅" && user.id == message.author.id;
  reply123
    .createReactionCollector(filter1, {
      maxMatches: 1,
      time: 15000,
      error: "You failed to react in-time!"
    })
    .on(
      "collect",
      async () =>
        (await reply123.edit(kickyes)) &&
        member12.kick(reason121212121) &&
        reply123.reactions.removeAll()
    );
  const filter12 = (reaction, user) =>
    reaction.emoji.name === "❌" && user.id == message.author.id;
  reply123
    .createReactionCollector(filter12, {
      maxMatches: 1,
      time: 15000,
      error: "You failed to react in-time!"
    })
    .on(
      "collect",
      async () =>
        (await reply123.edit(kickno)) && reply123.reactions.removeAll()
    );
};

module.exports.help = {
  name: "kick",
  aliases: [""]
};
