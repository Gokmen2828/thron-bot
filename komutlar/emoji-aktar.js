const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require(`quick.db`)
exports.run = async (client, message, args) => {
let prefix = require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;//burayı silebilirsiniz ayarlamalı prefix için burası
  if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.reply('Bu komutu kullanabilmek için `Emojileri Yönet` iznine sahip olmalısın!');
  let alınacakSunucu = client.guilds.cache.get(args[0]);
  if(!alınacakSunucu) return message.reply(`Botun belirtilen ID numarasına sahip bir sunucusu bulunamadı! \nEmojinin hangi sunucudan hangi sunucuya aktarılacağını ID ile belirtmelisin. \n**Örn:** \`${prefix}emoji-aktar [emojilerinAlınacağıSunucuID] [emojiAdı/tüm]\``);
  if(args[1] === "tüm") {
    if(alınacakSunucu.emojis.size < 2) return message.reply(`**${alınacakSunucu.name}** adlı sunucu 2'den emojiye sahip!`);
    try {
      alınacakSunucu.emojis.cache.each(x => message.guild.emojis.create(x.url, x.name));
      message.reply(`**${alınacakSunucu.name}** adlı sunucunun tüm emojilerini başarıyla bu sunucuya yükledim!`)
    } catch(err) { console.log(err) }
    return
  }
  if(!alınacakSunucu.emojis.cache.find(a => a.name === args[1])) return message.reply(`Emojinin hangi sunucudan hangi sunucuya aktarılacağını ID ile belirtmelisin. \n**Örn:** \`${prefix}emoji-aktar [emojilerinAlınacağıSunucuID] [emojiAdı/tüm]\``);//codepack
  if(!message.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return message.reply('Botun bu sunucuda yeterli yetkisi yok!');
  let emoji = alınacakSunucu.emojis.cache.find(a => a.name === args[1]);
  message.guild.emojis.create(emoji.url, emoji.name)  
  }
exports.conf = {
	enabled: true,
	guildOnly: true,
aliases:['ea', "emojia", "aktaremoji"],
	permLevel: 0
}
exports.help = {
name: 'emoji-aktar',     
description: 'İstediğiniz Bir Sunucunun İdsini Girip Emojilerini Aktarabilirsiniz.',     
usage: "emojia sunucu id tüm veya isim",
}