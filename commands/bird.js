const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const fetch1211121 = require("node-fetch");
  const messagetosend = await message.channel.send("Fetching Bird Pics...");

  const subreddits11 = ["Birds", "birdpics", "cockatiel", "birding"];
  const data1211121122 = await fetch1211121(
    `https://imgur.com/r/${
      subreddits11[Math.floor(Math.random() * subreddits11.length)]
    }/hot.json`
  )
    .then(response => response.json())
    .then(body => body.data);
  const selected112 =
    data1211121122[Math.floor(Math.random() * data1211121122.length)];
  let embed121 = new MessageEmbed()
    .setImage(
      `https://imgur.com/${selected112.hash}${selected112.ext.replace(
        /\?.*/,
        ""
      )}`
    )
    .setTitle("Flapping Wing Noises")
    .setColor("RANDOM")
    .setFooter(
      `Requested By: ${message.author.tag}`,
      message.author.displayAvatarURL({ dynamic: true })
    );
  messagetosend.edit("Bird Pics Found!", { embed: embed121 });
};

module.exports.help = {
  name: "bird",
  aliases: [""]
};
