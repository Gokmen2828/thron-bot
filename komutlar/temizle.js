const Discord = require('discord.js')

exports.run = function(client, message, args) {
 
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu Komudu Kullanabilmen İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`);
 
  let messagecount = parseInt(args.join(' '));
if (!messagecount) return message.channel.send('Sileceğin Mesaj Sayısını Belirtmedin Dostum!')
  message.channel.messages.fetch({ limit: messagecount })
.then(messages => message.channel.bulkDelete(messages));
 
 if (messagecount > 100) return message.reply("Dostum En Fazla **100** Mesaj Silebilirim Unutma!")
message.channel.send(`**${messagecount}** Adet Mesajı Uzaya Yolladım Dostum Senin Yüzünden Uzay Kirleniyor Biraz Kendin Sil!`)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sil',
};