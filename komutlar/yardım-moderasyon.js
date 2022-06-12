const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const yardımmoderasyon = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('Within Bot Moderasyon Menüsü')
    .setDescription(`
:white_small_square: **=** \`.kanal-koruma\` : **Kanal Koruma Açarsınız.** 
:white_small_square: **=** \`.aktif-say\` : **Sunucudaki Aktif Kişi Sayısına Bakarsınız.** 
:white_small_square: **=** \`.ban\` : **Etiketlediğiniz Kişiyi Sunucudan Banlarsınız.** 
:white_small_square: **=** \`.ban-log\` : **Banlog Ayarlarsınız.**
:white_small_square: **=** \`.banlimit\` : **Ban limiti Ayarlarsınız.**
:white_small_square: **=** \`.bugbildir\` : **Bug Bildirirsiniz.**
:white_small_square: **=** \`.davetlerim\` : **Sunucudaki Davetlerinize Bakarsınız..**
:white_small_square: **=** \`.kick\` : **Etiketlediğiniz Kişiyi Sunucudan Atarsınız.**
:white_small_square: **=** \`.kicklimit\` : **Kick limiti Ayarlarsınız.**
:white_small_square: **=** \`.küfür-engel (aç/kapat)\` : **Küfür Engel Açabilir Veya Kapatabilirsiniz.**
:white_small_square: **=** \`.modlog\` : **Moglog Ayarlarsınız.**
:white_small_square: **=** \`.modlog-kapat\` : **Modlogu Kapatırsınız.**
:white_small_square: **=** \`.yardım-mute\` : **Mute Komutları.**
:white_small_square: **=** \`.otorol\` : **Otorol Ayarlarsınız.**
:white_small_square: **=** \`.oylama\` : **Oylama Yaparsınız.**
:white_small_square: **=** \`.reklam-engel\` : **Reklam Engeli Açarsınız.**
:white_small_square: **=** \`.reklam-kick\` : **Reklam Yapan kişiyi Sunucudan Atar.**
:white_small_square: **=** \`.sayaç\` : **Sayaç Açarsınız.**
:white_small_square: **=** \`.sayaç-kapat\` : **SAyaç Kapatırsınız.**
:white_small_square: **=** \`.sil\` : **Yazdığınız Miktar Kadar Mesaj Silersiniz.**
:white_small_square: **=** \`.sohbetkilit\` : **Sohbet Kanalını Kilitler,Tekrar Yazdığınızda Geri Açar.**
:white_small_square: **=** \`.unban\` : **Id'sini Yazdığınız Kişinin Banını Açar.**
:white_small_square: **=** \`.slowmode\` : **Üyelerin Kanala Mesaj Atma Aralıklarını Ayarlayabilirsiniz.**


`) 
.addField( "» Linkler",
             `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=747020473413664838&permissions=8&scope=bot)` + "**\n**" + 
             `[Bota Oy Ver](YAKINDA)` + "**\n**" + `[Destek Sunucusu](https://discord.gg/f6W8WHp)`+ "**\n**" , false )
.setImage("https://cdn.discordapp.com/attachments/730752795652784218/746820446615240856/within-buyuk-resim.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardımmoderasyon)

  
   
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['yardım-moderasyon'],
 permLevel: 0
};

exports.help = {
 name: 'yardım-moderasyon'
};