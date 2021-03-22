const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login(process.env.token);
const fetch = require("node-fetch");
const fs = require("fs");
require("express")().listen(1343);

//UPTİME

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log("Pinglenmedi.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//OYNUYOR KISMI

client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("online");
  client.user.setActivity(`t!yardım || 118 proje`); //botun oynuyor kısmı
  console.log(`Bot AKTİF! Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
})


setInterval(() => {
  var links = db.get("linkler");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
    try {
      fetch(link);
    } catch (e) {
      console.log("" + e);
    }
  });
  console.log("Pinglendi.");
}, 60000);

client.on("ready", () => {
  if (!Array.isArray(db.get("linkler"))) {
    db.set("linkler", []);
  }
});

//embed hazırlıkları

const help = new discord.MessageEmbed()
  .setFooter("Tranix Uptime")
  .setColor("#40e82a")
  .setThumbnail("https://i.imgur.com/4M7IWwP.gif")
  .setDescription(
    `Selam Bot glitch sitelerinin 7/24 açık kalmasını sağlayan bir sistem içerir. Sistemdeki bağlantılar bakım gerektirmeden 7/24 çalışır. \n\n🕑 Uptime etmek için \`t!ekle [show linki]\` yazabilirsin \n🔒 Uptime edilen botlarımı görmek istiyorsun \`t!say\` `
  );
 
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "t!ekle") {
    var link = spl[1];
    fetch(link)
      .then(() => {
        if (
          db
            .get("linkler")
            .map(z => z.url)
            .includes(link)
        )
          return message.channel.send(
            new discord.MessageEmbed()
              .setFooter("Tranix uptime")
              .setColor("#40e82a")
              .setDescription("❌ Projeniz Zaten 7/24 Aktif")
          );
        message.channel.send(
          new discord.MessageEmbed()
            .setFooter("Tranix uptime")
            .setColor("#40e82a")
            .setDescription("✅ Projeniz Başarıyla 7/24 Oldu.")
        );
        db.push("linkler", { url: link, owner: message.author.id });
      })
      .catch(e => {
        return message.channel.send(
          new discord.MessageEmbed()
            .setFooter("Tranix uptime")
            .setColor("#40e82a")
            .setDescription("Lütfen Bir Link Giriniz")
        );
      });
  }
});



client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "t!say") {
    var link = spl[1];
    message.channel.send(
      new discord.MessageEmbed()
        .setFooter("Tranix uptime")
        .setColor("#40e82a")
        .setDescription(`${db.get("linkler").length} Proje Aktif Tutuluyor!`)
    );
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "t!yardım") {
    var link = spl[1];
    message.channel.send(help);
  }
});

client.on("guildCreate", guild => {
  const tranix = new discord.MessageEmbed()

    .setTitle(`Sunucuya Eklendim`)
    .setTimestamp()
    .setColor("GREEN")
    .setThumbnail(guild.iconURL())
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Sunucu ID`, guild.id)
    .addField(`Üye Sayısı`, guild.memberCount);
  client.channels.cache.get("798123697659445290").send(tranix);
});
client.on("guildDelete", guild => {
  const tranix = new discord.MessageEmbed()

    .setTitle(`Sunucudan çıkarıldım`)
    .setTimestamp()
    .setColor("GREEN")
    .setThumbnail(guild.iconURL())
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Sunucu ID`, guild.id)
    .addField(`Üye Sayısı`, guild.memberCount);
  client.channels.cache.get("798123697659445290").send(tranix);
});
