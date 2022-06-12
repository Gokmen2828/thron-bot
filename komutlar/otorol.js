const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client,message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin `Rolleri Yönet`')

  if(!args[0])  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription('Otorol sistemini ne yapmak istediğini belirtmedin :x: \n `w!otorol ayarla @üye #kanal` Otorol sistemini ayarlar \n  `w!otorol sıfırla` Otorol sistemini sıfırlar.'))

  if(args[0] === "ayarla") {

    var rol = message.mentions.roles.first()   
     var rolkanal = message.mentions.channels.first()
    if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription('Bir rol etiketlemelisin `w!otorol ayarla @rol #kanal` (Eğer rolü bulamıyorsan etiketleme izninin açık olduğundan veya komutun kullanıldığı kanalı görebildiğinden emin ol)'))
    if(!rolkanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription('Bir kanal etiketlemelisin eğer kanalı etiketleyemiyorsan botun o kanalı gördüğünden emin ol.'))
 
    db.set(`autoRoleChannel_${message.guild.id}`, rolkanal.id)
    db.set(`autoRole_${message.guild.id}`, rol.id)
  
    return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription('Otorol Sistemi Aktif edildi :white_check_mark: \n Otorol Ayarları : \n Sunucuya giren kişilere verilecek rol <@&' + rol + '> \n Otorol mesajının gideceği kanal <#' +rolkanal.id+ '> Olarak ayarlandı.'))
  }
  
  if(args[0] === "sıfırla") {
    let user = message.author
    message.channel.send('Otorol Sistemini sıfırlamak istediğinden eminmisin eğer eminsen :white_check_mark: değilsen :x: Tepkisine bas.').then(async m => {
      await m.react('✅').then(r => {
        let onay = (reaction, user) => reaction.emoji.name === '✅' && user.id == message.author.id;
        let onay2 = m.createReactionCollector(onay)
        onay2.on('collect', async(r)=>{
          db.delete(`autoRoleChannel_${message.guild.id}`)
          db.delete(`autoRole_${message.guild.id}`)
          m.reactions.removeAll()
          m.edit('Otorol sistemi kapatıldı.')
        })
      })
      await m.react('❌').then(r => {
         let onay = (reaction, user) => reaction.emoji.name == '❌' && user.id == message.author.id;
         let onay2 = m.createReactionCollector(onay)
         onay2.on('collect', async(r)=> {
           m.reactions.removeAll()
           m.edit('Otorol kapatma işlemi iptal edildi')
         })
      })
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 3,
}

exports.help = {
  name: "otorol"
};