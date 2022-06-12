const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  var oyun = [
    ".yardım Yardım Menüsüne Ulaşabilirsiniz | Within Developers🔥",
    ".davet Yazarak Botu Davet Edip Destek Sunucumuza Gelebilirsiniz | Within Developers🔥",
    "BOTTAKİ VERİLER TEMİZLENDİ!!",
    "VDS SPONSOR ARANIR,SPONSOR OLMAK İSTEYEN SAHİBİME DM ATABİLİR!"
    
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2000);

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Şu an ` +
      client.channels.cache.size +
      ` adet kanala, ` +
      client.guilds.cache.size +
      ` adet sunucuya ve ` +
      client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` kullanıcıya hizmet veriliyor!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Oyun ismi ayarlandı!`
  );
};
//shiny developers