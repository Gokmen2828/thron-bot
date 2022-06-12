const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const yardımkayıt = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('Within Bot Kayıt Menüsü')
    .setDescription(`
:white_small_square: **=** \`.kayıt-kanal\` : **Kayıt Kanalını Ayarlarsınız.** 
:white_small_square: **=** \`.kayıtçı-rol\` : **Kayıtçı Rolünü Ayarlarsınız.** 
:white_small_square: **=** \`.kız\` : **Kız Kayıt Edersiniz.** 
:white_small_square: **=** \`.kız-rol\` : **Kız Rol Ayarlarsınız.**
:white_small_square: **=** \`.erkek\` : **Erkek Kayıt Edersiniz.**
:white_small_square: **=** \`.erkek-rol\` : **Erkek Rolünü Ayarlarsınız.**
:white_small_square: **=** \`.alınacak-rol\` : **Alınacak Yani Kayıtsız Rolünü Ayarlarsınız.**
`) 
.addField( "» Linkler",
             `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=747020473413664838&permissions=8&scope=bot)` + "**\n**" + 
             `[Bota Oy Ver](YAKINDA)` + "**\n**" + `[Destek Sunucusu](https://discord.gg/f6W8WHp)`+ "**\n**" , false )
.setImage("https://cdn.discordapp.com/attachments/730752795652784218/746820446615240856/within-buyuk-resim.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardımkayıt)

  
   
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['yardım-kayıt'],
 permLevel: 0
};

exports.help = {
 name: 'yardım-kayıt'
};