const { Discord, MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
        let questions = [
          {
            title: "Best programming language",
            options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
            correct: 1
          },
          {
            title: "Best NPM package",
            options: ["int.engine", "ms", "ws", "discord.js"],
            correct: 3
          },
          {
            title:
              "How many soccer players should each team have on the field at the start of each match?",
            options: ["9 Players", "7 Players", "11 Players", "10 Players"],
            correct: 3
          },
          {
            title: "What year was the very first model of the iPhone released?",
            options: ["2008", "2007", "2009", "2006"],
            correct: 2
          },
          {
            title: "Which email service is owned by Microsoft?",
            options: ["Aol", "Outlook", "Gmail", "Hotmail"],
            correct: 4
          },
          {
            title: "Who was the first woman to win a Nobel Prize (in 1903)",
            options: [
              "Marie Curie",
              "Malala Yousafzai",
              "Bertha von Suttner",
              "Maria Goeppert Mayer"
            ],
            correct: 1
          },
          {
            title: "What animals are pearls found in?",
            options: ["Squid", "Oysters", "Clam", "Lobsters"],
            correct: 2
          },
          {
            title: "Which animal can be seen on the Porsche logo?",
            options: ["Donkey", "Cow", "Horse", "Otter"],
            correct: 3
          },
          {
            title:
              "Which company owns Bugatti, Lamborghini. Audi, Porsche, and Ducati?",
            options: ["Toyota", "BMW", "Ford", "Volkswagen"],
            correct: 4
          }
        ];
        let q = questions[Math.floor(Math.random() * questions.length)];
        let i = 0;
        const Embed99 = new MessageEmbed()
          .setTitle(q.title)
          .setDescription(
            q.options.map(opt => {
              i++;
              return `${i} - ${opt}\n`;
            })
          )
          .setColor(`GREEN`)
          .setFooter(
            `Reply to this message with the correct question number! You have 15 seconds.`
          );
        message.channel.send(Embed99);
        try {
          let msgs = await message.channel.awaitMessages(
            u2 => u2.author.id === message.author.id,
            { time: 15000, max: 1, errors: ["time"] }
          );
          if (parseInt(msgs.first().content) == q.correct) {
            return message.channel.send(`You got it correct!`);
          } else {
            return message.channel.send(`You got it incorrect.`);
          }
        } catch (e) {
          return message.channel.send(`You did not answer!`);
        }
}

module.exports.help = {
  name: "trivia",
  aliases: ["question"]
};
