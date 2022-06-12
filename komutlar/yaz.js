const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("Bunu yapabilmek için yeterli yetkin yok")
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
   const embed = new Discord.MessageEmbed()
   .setColor("RANDOM")
  .setDescription(mesaj);
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'yaz',
  description: '',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
