const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let user = message.author
  let sebep = args.join(" ")
 let member = message.mentions.members.first()
  let isim = args.slice(1).join(" (AFK)")
  if (!sebep) return message.channel.send(`Bir sebep yazmalısın.`)
  
  db.set(`afk_${user.id}`, sebep)
  message.channel.send(`Şu anda \`${sebep}\` sebebiyle AFK'sın.`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk',
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>'
}