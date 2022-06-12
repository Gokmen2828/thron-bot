const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const yardımeğlence = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('Within Bot Eğlence Menüsü')
    .setDescription(`
:white_small_square: **=** \`.şanslısayım\` : **Şanslı Sayınızı Gösterir.** 
:white_small_square: **=** \`.kralol\` : **Kral Olursunuz.** 
:white_small_square: **=** \`.korona-ol\` : **Korona Olursunuz.**
:white_small_square: **=** \`.espri\` : **Bot Espri Yapar.**
:white_small_square: **=** \`.doğrulukcesaret\` : **Doğruluk Mu Cesaret Mi oynarsınız.**
:white_small_square: **=** \`.atasözü\` : **Atasözü Söyler.**
:white_small_square: **=** \`.atatürkün-sözü\` : **Atatürkün Sözlerinden  Söyler.**
:white_small_square: **=** \`.wwegif\` : **WWE Gifi Atar.**
:white_small_square: **=** \`.vine\` : **Vine Atar.**
:white_small_square: **=** \`.stresçarkı\` : **StresÇarkı Çevirirsiniz.**
:white_small_square: **=** \`.rip\` : **Avatarınıza Rip Efekti Verir**
:white_small_square: **=** \`.piyango\` : **Piyango Çekersiniz**
:white_small_square: **=** \`.fal\` : **Fal Bakarsınız.**
:white_small_square: **=** \`.espri\` : **Bot Espri Yapar.**
:white_small_square: **=** \`.aşkölçer\` : **Etiketlediğiniz Kişiyle Aşkınızı Ölçer.**
:white_small_square: **=** \`.ara155\` : **155'i Ararsınız**
`) 
.addField( "» Linkler",
             `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=747020473413664838&permissions=8&scope=bot)` + "**\n**" + 
             `[Bota Oy Ver](YAKINDA)` + "**\n**" + `[Destek Sunucusu](https://discord.gg/f6W8WHp)`+ "**\n**" , false )
.setImage("https://cdn.discordapp.com/attachments/730752795652784218/746820446615240856/within-buyuk-resim.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardımeğlence)

  
   
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['yardım-eğlence'],
 permLevel: 0
};

exports.help = {
 name: 'yardım-eğlence'
};