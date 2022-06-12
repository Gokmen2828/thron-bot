const Discord = require("discord.js"); 
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send("**🔍 Atasözünü Buluyorum!**").then(message => {
    var gökmen = [
      "Besle kargayı oysun gözünü.", 
      "Can çıkmayınca huy çıkmaz.", 
      "Damlaya damlaya göl olur.",
      "Rüzgar eken fırtına biçer.", 
      "Perşembenin gelişi,çarşambadan bellidir.", 
      "Üzüm üzüme baka baka kararır.",
      "Üzümün ye de bağını sorma.", 
      "Zahmetsiz rahmet olmaz.",
      "Deliye her gün bayram.", 
      "Elden gelen övün olmaz , o da vaktinde gelmez.", 
      "Eşek hoşaftan ne anlar.", 
      "Fazla mal göz çıkarmaz.",
      "Felek kimine kavun yedirir, kimine kelek.", 
      "Gülü seven dikenine katlanır.", 
      "Gülme komşuna gelir başına",
      "Görünen köy kılavuz istemez.", 
      "Her horoz kendi çöplüğünde öter.", 
      "Her inişin bir yokşu vardır", 
      "Kedi uzanamadığı ciğere murdar der."
    ]; 
    var gökmen = gökmen[Math.floor(Math.random() * gökmen.length)]; 
    message.edit(`Atazözün: ${gökmen}`); 
  });
}; 

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["atasözüm", "random-atasözü"], 
  permLevel: 0 
};

exports.help = { 
  name: "atasözü", 
  description: "Atasözü Bulmaya Çalışır", 
  usage: "atasözü"
};