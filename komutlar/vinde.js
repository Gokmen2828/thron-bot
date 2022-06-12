exports.run = (bot, message, args, level) => {
    const Discord = require('discord.js');
    var vine = Math.floor(Math.random()*17);
    message.channel.send("https://bit.ly/VineJS" + vine);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: []
};

exports.help = {
    name: 'vine',
  category:'eğlence',
    description: 'Rastgele vine gönderir',
    usage: 'vine'
};