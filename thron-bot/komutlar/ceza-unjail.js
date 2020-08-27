const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("734797028118233160")) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('734797028118233160')
  member.removeRole('735066886370230302')
  let embed = new Discord.RichEmbed()
  .setColor('RED')
  .addField(`PhoéniX`, `${kullanıcı} **adlı üyenin cezası kalktı! **`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cezaaç"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'unjail',
  description: "Cezalı rolünü kaldırır",
  usage: 'unjail'
}