module.exports = (client, member) => {
  
var kanal = client.channels.get("608370869475082260")
kanal.send(`** :trophy: | ${member.user.username} adlı kişi sunucudan ayrıldı.*`)
  
}