const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.has('734786281766256731')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  const tag = "ℐ | ";
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = "734773653295726673"; ///alınacak rol idsi
  let ver = "734841646684045324"; ///verilecek rol idsi
  if (!member) return message.channel.send("Bir Kullanıcı Etiketle");
  if (!isim) return message.channel.send("Bir İsim Girmelisin!");
  member.setNickname(`${tag} ${isim}  ${yaş}`);
  
    member.addRole(ver);
    member.removeRole(al);
  

  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setTitle("Kayıt Sistemi")
    .setThumbnail(message.author.avatarURL)
    .setDescription( `Kayıt Edilen Kullanıcı : **${member.user}** \n Kayıt Eden Yetkili : ${message.author.username} \n Kayıt Islemınde Verılen Rol : <@&${ver}> \n Alınan Rol : <@&${al}>`)
client.channels.get('734773849773834383').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kız" , "Kız" , "k"],
  permLevel: 0
}
exports.help = {
  name: 'KIZ',
  description: "kız Kayıt Sıstemı",
  usage: 'Kız isim yaş'
} 