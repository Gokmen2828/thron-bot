const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(' Uyarı ', '`sunucubilgi` Adlı Komutu Özel Mesajlarda Kullanamazsın!')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('💎 Sunucu Adı:', message.guild.name)
    .addField('💎 Sunucu ID:', message.guild.id)
    .addField('💎 Kanal Sayısı:', message.guild.channels.cache.size)
    .addField('💎 Sunucu Bölgesi:', message.guild.region)
    .addField('💎 Üye Sayısı:', message.guild.memberCount)
    .addField('💎Sunucu Sahibi:', message.guild.owner)
    .addField('💎 Oluşturulma Tarihi:', message.guild.createdAt)
    .setThumbnail(message.guild.iconURL);
    return message.channel.send(sunucubilgi);
    }
    message.react("👑")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
//GÖKMEN
