  const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[-] Komutlar yüklendi.`);
    client.user.setActivity(`Rebirth Register`, { type: "PLAYING"});
  client.user.setStatus("online");
};