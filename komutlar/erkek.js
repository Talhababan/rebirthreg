const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {//splashen

    let erkekROL = ayarlar.erkekROL 
    let kayıtsızROL = ayarlar.kayıtsızROL
    let kayıtlıROL = ayarlar.kayıtlıROL
    let yetkili = ayarlar.yetkiliROL
    let kayıtLOG = ayarlar.kayıtLOG

    if(!message.member.roles.has(yetkili)) return message.channel.send('Bu işlemi sadece yetkililer yapabilir')


if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
  
  
  const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
   var kontrol;
if (kurulus < 1296000000) kontrol = 'Şüpheli'
if (kurulus > 1296000000) kontrol = 'Güvenli'
  
  
  
let isim = args[1];
if(!isim) return message.channel.send(`Üyenin ismini belirtmelisin.`)
if(isim.length > 16) return message.channel.send(`Daha kısa bir isim yaz.`)

let yaş = args[2];
if(!yaş) return message.channel.send(`Üyenin yaşını belirtmelisin.`)
if(yaş.length > 100) return message.channel.send(`Üyenin yaşı 100'den büyük olamaz.`)
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`Kayıt Başarılı`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
message.guild.members.get(kullanıcı.id).setNickname(`${isim} • ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(erkekROL)
  message.guild.members.get(kullanıcı.id).addRole(kayıtlıROL)
message.guild.members.get(kullanıcı.id).removeRole(kayıtsızROL)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`• Kaydın başarıyla ${message.author} tarafından yapıldı. \n • Sunucudaki İsmin : ${isim} • ${yaş} \n • Kurallar kanalımızı okumayı unutma!`))
  db.add(`erkek_${message.author.id}_${message.guild.id}`, "1")
let embed2 = new Discord.RichEmbed()
.setTitle(`• Bir Kullanıcı Kayıt Oldu.`)
.setDescription(`
• **Kayıt Olan Kullanıcı:** ${kullanıcı} \`    \` 
• **İsim Yaş:** \` ${isim} | ${yaş} \`
• **Verilen Rol:** <@&${erkekROL}> \`    \` 
• **Bu Hesap:** \`  { ${kontrol} }  \` 
• **Kayıt eden:** ${message.author} \`  { ${message.author.id} }  \` 
• **{ ${message.author} } Toplam kayıt sayısı =**  \` ${toplam} \` 

• **{    __Toplam Erkek Kaydı =  \` ${erkek} \` Toplam Kız Kaydı= \` ${kız} \`__  }**  
`)
.setImage('')



client.channels.get(ayarlar.kayıtLOG).send(embed2)
let embed3 = new Discord.RichEmbed()
.setTitle(`Kayıt Başarılı`)
.setDescription(`
<a:778677473196900382:807159234231402547> • **Kayıt edilen:** ${kullanıcı} \`    \` 
<a:778677473196900382:807159234231402547> • **Verilen rol:** <@&${erkekROL}> \`    \` 
<a:778677473196900382:807159234231402547> • **Kayıt eden:** ${message.author} \`    \` 
<a:778677473196900382:807159234231402547> • **Güncellenen isim:** \` ${isim} | ${yaş} \`
`)
.setImage('')
message.channel.send(embed3)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['e'],
  permLevel: 0
};

exports.help = {
  name: 'erkek'
}//splashen
