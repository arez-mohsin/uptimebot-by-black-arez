

const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login("");
const prefix = "!";
const fetch = require("node-fetch");
const fs = require("fs");
require("express")().listen(1343);
///by bj and arez 😎
///by bj and arez 😎
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
///by bj and arez 😎
///by bj and arez 😎
///by bj and arez 😎
client.on("ready", () => {
  console.log(`zhonn by bj and arez 😎❤`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}add`); //botun oynuyor kısmı
  console.log(`status addedd`);
})
///by bj and arez 😎
///by bj and arez 😎
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
///by bj and arez 😎
client.on("ready", () => {
  if (!Array.isArray(db.get("linkler"))) {
    db.set("link", []);
  }
});
///by bj and arez 😎
///by bj and arez 😎
///by bj and arez 😎
const help = new discord.MessageEmbed()
  .setFooter("Uptime")
  .setColor("#40e82a")
  .setThumbnail("")
  .setDescription(
    `➕ Successful Added Your Link  `
  );

///by bj and arez 😎
 
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "!link") {
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
              .setFooter("uptime")
              .setColor("#40e82a")
              .setDescription("❌ Your project is already activeverything ")
          );
        message.channel.send(
          new discord.MessageEmbed()
            .setFooter("uptime")
            .setColor("#40e82a")
            .setDescription("✅ Added Your Project To 24/7 😎 ")
        );
        db.push("linkler", { url: link, owner: message.author.id });
      })
      .catch(e => {
        return message.channel.send(
          new discord.MessageEmbed()
            .setFooter("uptime")
            .setColor("#40e82a")
            .setDescription("**❌ Please put your snare to host it **")
        );
      });
  }
});

///by bj and arez 😎

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "!say") {
    var link = spl[1];
    message.channel.send(
      new discord.MessageEmbed()
        .setFooter("uptime")
        .setColor("#40e82a")
        .setDescription(`${db.get("linkler").length} Project enabled!`)
    );
  }
});
///by bj and arez 😎
client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "help") {
    var link = spl[1];
    message.channel.send(help);
  }
});

///by bj and arez 😎
///by bj and arez 😎





///by bj and arez 😎
///by bj and arez 😎
///by bj and arez 😎

///by bj and arez 😎
///by bj and arez 😎
///by bj and arez 😎
///by bj and arez 😎


///by bj and arez 😎
///by bj and arez 😎
///by bj and arez 😎
///by bj and arez 😎

///by bj and arez 😎
