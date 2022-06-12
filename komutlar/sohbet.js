const Discord = require("discord.js")
const db = require("quick.db")

//Test edilmemiştir hata varsa bildiriniz!

module.exports.run= async(client, message, args) => {
  if(db.has(message.channel.id+".kilitli")) {
       message.channel.createOverwrite(message.guild.roles.cache.find((role) => role.name === "@everyone"), {
         SEND_MESSAGES: true, 
      });
      message.channel.send(`${message.channel} kanalında artık herkes mesaj atabilir.`)
      db.delete(`${message.channel.id}.kilitli`)
   } else {
      message.channel.createOverwrite(message.guild.roles.cache.find((role) => role.name === "@everyone"), {
         SEND_MESSAGES: false, 
      });
      message.channel.send(`${message.channel} kanalında artık kimse mesaj atamaz. Komutu tekrar kullanarak herkesin tekrar mesaj gönderebilmesini sağlayabilirsiniz.`)
      db.set(`${message.channel.id}.kilitli`, true)
   }
}
module.exports.conf = {
  aliases: ["sohbetkilit"]
}

module.exports.help = {
  name: "sohbet-kilit"
}