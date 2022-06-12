const Discord = require('discord.js');

 exports.run = (client, message, args) => {

   var soru
   
if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(`Bu Komutu Kullanailmek İçin \`MANAGE_GUILD\` yetkisine sahip olmalısın!`);
   message.delete();
   let devtr_kod_paylasim = args.join(' ');
   if (!devtr_kod_paylasim) return message.channel.send("Lütfen bir soru gir!")
//#DevTR - xFalcon
     message.channel.send(new Discord.MessageEmbed()
  .setColor("BLUE")
.setFooter(`Bu anket ${message.author.tag} tarafından yapılıyor... | `)
.setDescription(soru)).then(function(message) {
message.react('✅');
message.react('❌');
});
 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['anket'],
      permLevel: 0
};

exports.help = {
  name: 'oylama',
};