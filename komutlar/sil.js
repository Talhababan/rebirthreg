const Discord = require('discord.js');

exports.run = async(jaus, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için "MESAJLARI YÖNET" iznine sahip olmalısın!`);
  if (!args[0] || isNaN(args[0])) return message.reply(`Temizlenecek mesaj miktarını belirtmelisin! (İstediğin kadar)` );
  await message.delete();
  let sayi = Number(args[0]);//artemuscode
  let silinen = 0;
  for (var i = 0; i < (Math.floor(sayi/100)); i++) {
    await message.channel.bulkDelete(100).then(r => silinen+=r.size);
    sayi = sayi-100;
  };//artemuscode
  if (sayi > 0) await message.channel.bulkDelete(sayi).then(r => silinen+=r.size);
  message.reply(`**${silinen}** adet mesaj silindi.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,  
  aliases: ["temizle", "sil"],
  permLevel: 0
};

exports.help = { 
  name: 'temizle', 
  description: 'sınırsız mesaj siler(Sınırsız)',
  usage: 'temizle <miktar>'
};