const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
.addField(`<a:kalpik:747724367869509732> » Yapımcım` ,`<@600634137350635543> , <@704603740245852202>`,true) 
.addField(`<a:tmm:747724368427221104> » Node.js`, `${process.version}`, true)
.addField(`<a:bakmjee:747724366044987474> » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
.addField(`<a:boostttt:747724369005903884> » Kullanıcı Sayısı`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
.addField(`<a:infinity:747724365528825946> » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
};