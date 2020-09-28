const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args, prefix) => {
        let question1 = message.content.split(`ops!8ball `)
        if (!question1)
          return message.channel.send(`You did not specify your question!`);
        else {
          let responses = [
            "Maybe.",
            "Certainly not.",
            "I hope so.",
            "Not in your wildest dreams.",
            "There is a good chance.",
            "Quite likely.",
            "I think so.",
            "I hope not.",
            "I hope so.",
            "Never!",
            "Pfft.",
            "Sorry, bucko.",
            "Hell, yes.",
            "Hell to the no.",
            "The future is bleak.",
            "The future is uncertain.",
            "I would rather not say.",
            "Who cares?",
            "Possibly.",
            "Never, ever, ever.",
            "There is a small chance.",
            "Yes!",
            "lol no.",
            "There is a high probability.",
            "What difference does it makes?",
            "Not my problem.",
            "Ask someone else."
          ];
          let response =
            responses[Math.floor(Math.random() * responses.length - 1)];
          let Embed11 = new MessageEmbed()
            .setTitle(`8Ball!`)
            .setDescription(
              `Your question: ${question1}\nMy reply: ${response}`
            )
            .setColor(`RANDOM`);
          message.channel.send(Embed11);
        }
        }

module.exports.help = {
  name: "8ball",
  aliases: [""]
};