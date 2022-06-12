const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  //DevTR Mega
  let trdev = message.guild.members.cache.filter(m => m.presence.status !== "offline").size
  
    const devtr = new Discord.MessageEmbed()
    .setTitle("Sunucudaki Aktif Üyeler")
    .setDescription('**' + message.guild.name + '** Sunucusunda şu anda toplam **' + trdev + '** Aktif üye bulunuyor!')
    .setColor(Math.floor(Math.random()*16777215))
    message.channel.send(devtr)  
  //DevTR Mega
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'aktifüye',
  description: 'Sunucudaki Aktif Üyeleri Gösterir', 
  usage: 'aktifüye'
};