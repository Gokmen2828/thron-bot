const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has('728551005960142948') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bir üye etiketlemen gerekiyor!').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send("Lütfen Bir Sebep Yazınız.").then(m => m.delete(5000));
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r)

   
})
  member.addRole('735066886370230302')
     const kanal = message.guild.channels.find(c => c.id == "log-kanal id")
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${kullanıcı} adlı üye **${reason}** sebebi ile jaile atıldı!`)
    .setColor("RED")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  
  let embed = new Discord.RichEmbed() 
  .setDescription(`${kullanıcı} adlı üye sürgün edildi!`) 
  .setImage('https://cdn.discordapp.com/attachments/673224895756238848/673450899531628544/adalaett.gif')
  .setFooter(`Justice is the basis of property..`)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete(5000));
  
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket sebep'
} 