const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const yardımmute = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('Within Bot Mute Menüsü')
    .setDescription(`
:white_small_square: **=** \`.mute\` : **Etiketlediğiniz Kişiyi Mutelersiniz.** 
:white_small_square: **=** \`.mute-rol\` : **Mutelenince Verilecek Rolü Ayarlarsınız.** 
:white_small_square: **=** \`.mute-yetkili-rol\` : **Muteleyici Rolünü Belirlersiniz.** 


`) 
.addField( "» Linkler",
             `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=747020473413664838&permissions=8&scope=bot)` + "**\n**" + 
             `[Bota Oy Ver](YAKINDA)` + "**\n**" + `[Destek Sunucusu](https://discord.gg/f6W8WHp)`+ "**\n**" , false )
.setImage("https://cdn.discordapp.com/attachments/730752795652784218/746820446615240856/within-buyuk-resim.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardımmute)

  
   
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['yardım-mute'],
 permLevel: 0
};

exports.help = {
 name: 'yardım-mute'
};