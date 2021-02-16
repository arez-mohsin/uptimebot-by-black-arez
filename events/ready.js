const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
   client.user.setStatus('dnd') 
   client.user.setActivity(`${prefix}yardım 🔥 t!davet 🔥 t!website 🔥`);
   console.log(`[ BOT HAZIR ] - [ SUNUCULAR - ${client.guilds.cache.size} ] - [ KULLANICILAR - ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} ]`)
     

};