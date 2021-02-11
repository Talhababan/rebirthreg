const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {//splashen
  let yetkili = message.author
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
var embed = new Discord.RichEmbed()
.setTitle(`• \`Kayıt Bilgileri\``)

.setDescription(`

<a:778677473196900382:807159234231402547> •  **Yetkili :** ${yetkili}   \`  \`

<a:778677473196900382:807159234231402547> • **Toplam üye kayıt sayısı :** \` ${toplam} \`

<a:778677473196900382:807159234231402547> • **Toplam kız kayıt sayısı :** \` ${kız} \`

<a:778677473196900382:807159234231402547> • **Toplam erkek kayıt sayısı :** \` ${erkek} \`



`)
.setThumbnail(yetkili.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/798688084878426112/798699708364488734/standard.gif')
message.reply(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ks', 'kayıtsayısı'],
  permLevel: 0
};

exports.help = {
  name: 'toplamkayıt'
};//splashen