const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const mesaj = args.slice(0).join(' ');
    if(!message.member.roles.has("734771544391286884")) return message.channel.send(`Bu komutu kullanabilmek için \` ℐ | Kurucu\` yetkisine sahip olmasınız.`);
    if(mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setDescription(`Herkese mesaj göndere bilmem için önce mesajını yazman lazım.`).setColor('BLACK'));
      try {
        message.guild.members.forEach(member=> {
        member.send(mesaj)        
          }) 
        message.channel.send(new Discord.RichEmbed().setDescription(`Mesaj başarıyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gönderildi.`).setColor('RANDOM'));
          }
        catch(e) {
        return console.log(`Hata`)  
      }    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'DM Duyuru.',
  usage: 'duyuru'
};