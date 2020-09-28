const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        const Discord = require("discord.js");
        const fetch = require("node-fetch");
        let countries = args.join(" ");

        const noArgs = new MessageEmbed()
          .setTitle("Missing arguments")
          .setColor(0xff0000)
          .setDescription(
            "You are missing some args (ex: ops!covid world || ops!covid US)"
          )
          .setTimestamp();

        if (!args[0]) return message.channel.send(noArgs);

        if (args[0] === "world") {
          fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
              let confirmed = data.confirmed.value.toLocaleString();
              let recovered = data.recovered.value.toLocaleString();
              let deaths = data.deaths.value.toLocaleString();

              const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField("Confirmed Cases", confirmed)
                .addField("Recovered", recovered)
                .addField("Deaths", deaths)
                .setColor("GREEN");

              message.channel.send(embed);
            });
        } else {
          fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
              let confirmed = data.confirmed.value.toLocaleString();
              let recovered = data.recovered.value.toLocaleString();
              let deaths = data.deaths.value.toLocaleString();

              const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField("Confirmed Cases", confirmed)
                .addField("Recovered", recovered)
                .addField("Deaths", deaths)
                .setColor("GREEN");

              message.channel.send(embed);
            })
            .catch(e => {
              return message.channel.send("Invalid country provided");
            });
        }
}

module.exports.help = {
  name: "covid",
  aliases: [""]
};
