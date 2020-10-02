const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
  const weather = require("weather-js");
  if (!args[0])
    return message.reply(
      "You're required to enter a place to fetch the weather from!"
    );

  weather.find({ search: args.join(" "), degreeType: "F" }, function(
    error,
    result
  ) {
    if (error) return message.channel.send(error);
    if (!args[0]) return message.channel.send("Please specify a location");

    if (result === undefined || result.length === 0)
      return message.channel.send("**Invalid** location");

    var current = result[0].current;
    var location = result[0].location;

    const weatherinfo = new MessageEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Weather forecast for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0x111111)
      .addField("Timezone", `UTC${location.timezone}`, true)
      .addField("Degree Type", "Farneheit", true)
      .addField("Temperature", `${current.temperature}°`, true)
      .addField("Wind", current.winddisplay, true)
      .addField("Feels like", `${current.feelslike}°`, true)
      .addField("Humidity", `${current.humidity}%`, true)
      .setFooter(
        `Requested by: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      );

    message.channel.send(weatherinfo);
  });
};

module.exports.help = {
  name: "weather",
  aliases: [""]
};
