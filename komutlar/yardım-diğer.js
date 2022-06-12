const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const yardımdiğer = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('Within Diğer Komutlar Menüsü')
    .setDescription(`
:white_small_square: **=** \`.avatar\` : **Avatarınızı Atar.** 
:white_small_square: **=** \`.davet\` : **Botu Davet Edebilirsiniz.** 
:white_small_square: **=** \`.istatistik\` : **Botun İstatistiğini Gösterir.**
:white_small_square: **=** \`.komutlar\` : **Tüm Komutları Gösterir**
:white_small_square: **=** \`.ping\` : **Botun Pingini Gösterir.**
:white_small_square: **=** \`.sa-as(aç/kapat)\` : **Sa As Sistemini Açabilir Veya Kapatabilirsiniz..**
:white_small_square: **=** \`.sunucubilgi\` : **Sunucu Bilgisini Gösterir.**
:white_small_square: **=** \`.yaz\` : **Bota Birşey Yazdırırsınız.**
:white_small_square: **=** \`.bakım\` : **Sadece Yapımcım Kullanabilir.**
:white_small_square: **=** \`.emoji-aktar\` : **Başka Sunucudaki Emojileri Komutu Kullandığınız Sunucuya Aktarırsınız.**
`) 
.addField( "» Linkler",
             `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=747020473413664838&permissions=8&scope=bot)` + "**\n**" + 
             `[Bota Oy Ver](YAKINDA)` + "**\n**" + `[Destek Sunucusu](https://discord.gg/f6W8WHp)`+ "**\n**" , false )
.setImage("https://cdn.discordapp.com/attachments/730752795652784218/746820446615240856/within-buyuk-resim.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardımdiğer)

  
   
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['yardım-diğer'],
 permLevel: 0
};

exports.help = {
 name: 'yardım-diğer'
};