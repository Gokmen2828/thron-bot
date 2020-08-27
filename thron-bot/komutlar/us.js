const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`)
db.fetch(`usohbet_${message.channel.id}`).then(usdurum => {
if(!usdurum || usdurum === 'pasif') usdurum = "Pasif"
if(!args[0]) return message.channel.send('Bot silici şuanda ' + usdurum + '\nAçmak veya kapatmak için ``aç`` veya ``kapat`` yazmalısın')
})
  if(args[0] === 'aç') {
    db.set(`usohbet_${message.channel.id}`,'aktif')
    message.channel.send('**Ultra sohbet temizleyici :** `Aktif!`')
    }
  else if (args[0] === 'kapat') {
    db.set(`usohbet_${message.channel.id}`,'pasif')
    message.channel.send('**Ultra sohbet temizleyici :** `Kapalı!`')
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ultrasohbettemizleyici', 'bs', 'obs'],
  permLevel: 0,
};

exports.help = {
  name: 'us',
  description: 'Bot mesajlarını siler',
  usage: 'botmsgsil'
};