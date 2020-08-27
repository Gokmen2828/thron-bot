const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Ahh tanrım yetkin yok ki..");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz!");
  message.delete()
  message.react('622507169442693143')
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`• **${args[0]} adet mesaj başarıyla silindi!**`).then(msg => {
         msg.delete(5000)
      
    }
    
    )
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear' , 'sil'],
  permLevel: 1
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};