const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const yardım = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor('Within Bot Yardım Menüsü')
    .setDescription(`
:white_small_square: **=** \`.yardım-eğlence\` : **Eğlence Komutları.** 
:white_small_square: **=** \`.yardım-kayıt\` : **Kayıt Komutları.** 
:white_small_square: **=** \`.yardım-moderasyon\` : **Moderasyon Komutları.**
:white_small_square: **=** \`.yardım-diğer\` : **Diğer Komutlar.**
`) 
.addField( "» Linkler",
             `[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=747020473413664838&permissions=8&scope=bot)` + "**\n**" + 
             `[Bota Oy Ver](YAKINDA)` + "**\n**" + `[Destek Sunucusu](https://discord.gg/f6W8WHp)`+ "**\n**" , false )
    .setImage("https://cdn.discordapp.com/attachments/730752795652784218/746820446615240856/within-buyuk-resim.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'yardım'
};