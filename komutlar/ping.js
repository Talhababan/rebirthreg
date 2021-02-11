const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {

  
    const jaus1 = new Discord.RichEmbed()
    .setColor('BLACK')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Bot Ping ** = **`' + client.ping + '`** **ms**')
    .setFooter('Anlık Botun Pingi');
    message.react('<a:778677473196900382:807159234231402547>')// tepki vermesini vermek istiyorsanız  emoji id girin
  
    message.channel.sendEmbed(jaus1).then(m => m.delete(50000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pingi gösterir.',
  usage: 'ping'
};