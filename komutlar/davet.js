const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const davet = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`Within Bot Davet Menüsü `)

.addField( "» Linkler",
             ` **Botu Davet Etmek İçin** [TIKLA!](https://discord.com/api/oauth2/authorize?client_id=747020473413664838&permissions=8&scope=bot)` + "**\n**" + 
             ` **Bota Oy Vermek İçin** [TIKLA!](https://lh3.googleusercontent.com/proxy/p3HMJbgLgWFZesacLND3_XVdy4gJfsyzjdjcRua2wOm8dd6mncBGKJvvl-YIgin0d1jBlYkwDUSwn24vDwt6h5lL6Rwphhzk1-IiiYjUSBZ8SlhHhUqg)` + "**\n**" + ` **Destek Sunucusuna Katılmak İçin** [TIKLA!](https://discord.gg/f6W8WHp)`+ "**\n**" , false )
.setImage("https://cdn.discordapp.com/attachments/730752795652784218/746817191688667226/within-buyuk-resim.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(davet)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: '',
  usage: 'davet'
};