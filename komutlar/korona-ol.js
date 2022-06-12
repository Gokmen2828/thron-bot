const Discord = require ("discord.js");
exports.run = (client, message) => {
  
  
  var devtr = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setDescription("Artık sende korona oldun")
  .setImage(`https://cdn.discordapp.com/attachments/677985078202073109/689935110551765023/a.gif`)
  .setFooter("Korona var burda!!!!")
  
  message.channel.send(devtr)
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
module.exports.help = {
  name: 'korona-ol',
};