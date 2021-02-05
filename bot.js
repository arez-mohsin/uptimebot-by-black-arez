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



module.exports = client => {
  console.log(`[BOT] | Botun destekçileri ve komutları başarıyla yüklendi, işlemler tamamlandı !`);
  console.log(`[BOT] | (${client.user.username}) HAZIR KAPTAN  !
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);
  client.user.setStatus("online");
  client.user.setActivity("t!yardım 🔥 t!davet 🔥t!website🔥", { type: "PLAYİNG"}); //// TYPE - WATCHING , AYING , LISTENING gibi değiştirilebilir.
  console.log(`bot başarıyla aktif`);

};


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
  .setColor("RED")
  .setThumbnail("https://i.imgur.com/4M7IWwP.gif")
  .setDescription(
    `Selam \n\n🕑 Uptime olmak için \`!ekle [show linki]\` yazabilirsin \n🔒 Uptime ettiğin botlarımı görmek istiyorsun \`!göster\` `
  );

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "!ekle") {
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
              .setColor("RED")
              .setDescription("Projeniz Sistemimizde Zaten Var")
          );
        message.channel.send(
          new discord.MessageEmbed()
            .setFooter("Tranix uptime")
            .setColor("RED")
            .setDescription("Projeniz Sistemimize Başarıyla Eklendi.")
        );
        db.push("linkler", { url: link, owner: message.author.id });
      })
      .catch(e => {
        return message.channel.send(
          new discord.MessageEmbed()
            .setFooter("Tranix uptime")
            .setColor("RED")
            .setDescription("Lütfen Bir Link Giriniz")
        );
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "!göster") {
    var link = spl[1];
    message.channel.send(
      new discord.MessageEmbed()
        .setFooter("Tranix uptime")
        .setColor("RED")
        .setDescription(`${db.get("linkler").length} Proje Aktif Tutuluyor!`)
    );
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "!yardım") {
    var link = spl[1];
    message.channel.send(help);
  }
});

client.on("guildCreate", guild => {
  const murat = new discord.MessageEmbed()

    .setTitle(`Sunucuya Eklendim`)
    .setTimestamp()
    .setColor("GREEN")
    .setThumbnail(guild.iconURL())
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Sunucu ID`, guild.id)
    .addField(`Üye Sayısı`, guild.memberCount);
  client.channels.cache.get("791168083880443944").send(murat);
});
client.on("guildDelete", guild => {
  const murat = new discord.MessageEmbed()

    .setTitle(`Sunucudan çıkarıldım`)
    .setTimestamp()
    .setColor("GREEN")
    .setThumbnail(guild.iconURL())
    .addField(`Sunucu İsmi`, guild.name)
    .addField(`Sunucu ID`, guild.id)
    .addField(`Üye Sayısı`, guild.memberCount);
  client.channels.cache.get("791168083880443944").send(murat);
});
