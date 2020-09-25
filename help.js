module.exports = {
  'help': {
    aliases: ['commands'],
    description: 'Shows the list of commands or help on specified command.',
    format: 'help [command-name]'
  },
  'ping': {
    aliases: ['pong'],
    description: 'Checks connectivity with discord\'s servers.',
    format: 'ping'
  },
  'say': {
    aliases: ['repeat'],
    description: 'Repeats whatever is said.',
    format: 'say <message>'
  },
    'ban': {
    aliases: ['N/A'],
    description: 'Bans the given user, they may not join back unless they\'re unbanned.',
    format: 'ban [user-mention]'
},
  'kick': {
    aliases: ['N/A'],
    description: 'Kicks the given user from the current guild, they may still join back if they get a new invite.',
    format: 'kick [user-mention]'
  },
'warn': {
  aliases: ['N/A'],
  description: 'Lets a user know they\'re doing something wrong.',
  format: 'warn [user-mention] <reason>'
},
  'meme': {
    aliases: ['N/A'],
    description: 'Sends a meme embed off redit.',
    format:'meme'
  },
  'purge': {
    aliases: ['clear'],
    description: 'BulkDelete the given number of messages. (2-100)',
    format:'purge <amount>'
  },
    'mute': {
    aliases: ['N/A'],
    description: 'Mutes the given user until, unmuted manually or by command. You must make a muted role and deny it\'s permission to talk in channels before using the command.',
    format:'mute [user-mention] [reason]'
  },
    'unmute': {
    aliases: ['N/A'],
    description: 'Unmutes the given user so, they can talk again.',
    format:'unmute [user-mention]'
  },
    'userinfo': {
    aliases: ['whois'],
    description: 'Shows information on the given user.',
    format:'userinfo <mention>'
  },
  'serverinfo': {
    aliases: ['N/A'],
    description: 'Sends information on the current guild.',
    format:'serverinfo'
  },
   'giveaway': {
    aliases: ['N/A'],
    description: 'Randomly chooses a user who reacted when the giveaway time is up.',
    format:'giveaway <time> <channel> <prize>'
},
 'poll': {
    aliases: ['vote'],
    description: 'Creates a simple yes or no poll, where users can react 👍 or 👎',
    format:'poll <channel> <question>'
},
'announce': {
   aliases: ['N/A'],
   description: 'Announce a message to the given channel in an embed model.',
   format:'announce <channel-id> <message>'
},
'trivia': {
  aliases: ['N/A'],
  description: 'You will be asked a series of questions and you answer them',
  format:'trivia'
},
'8ball': {
  aliases: ['N/A'],
  description: 'High chance you\'ll be roasted',
  format:'8ball <yes/no question>'
},
'report': {
  aliases: ['N/A'],
  description: 'There must be a channel called #reports for this command to work, it is used to report people to server moderators.',
  format:'report [user-mention] <reason>'
},
'slowmode': {
  aliases: ['N/A'],
  description: 'This will set the channel slowmode to the number provided.',
  format:'slowmode [time] <reason>'
},
'role': {
  aliases: ['N/A'],
  description: 'This will create/delete a role.',
  format:'role <create/delete> <hex-code> <name/id>'
},
'emojis': {
  aliases: ['N/A'],
  description: 'Sends the emoji count of animated, non-animated and overall in the current guild.',
  format:'emojis'
},
'covid': {
  aliases: ['N/A'],
  description: 'Sends stats on Covid-19.',
  format:'covid <world/country>'
},
'stats': {
  aliases: ['N/A'],
  description: 'Sends the bots user and server count.',
  format:'stats'
},
'feedback': {
  aliases: ['N/A'],
  description: 'Sends feedback to the bot developers, do not abuse this command or you\'ll get blacklisted from this command.',
  format:'feedback <message>'
}
}