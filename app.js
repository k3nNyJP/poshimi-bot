const Discord = require("discord.js");
const client = new Discord.Client();

const { DISCORD_TOKEN } = process.env;
const reactionWordList = ["ぽしみ", "ぽやしみ", "ぽやすみ"];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (
    !msg.author.bot &&
    reactionWordList.some((word) => msg.content.includes(word))
  ) {
    const rng = Math.random() * 100;

    switch (true) {
      case rng <= 1:
        msg.channel.send("?uragigi");
        setTimeout(() => {
          msg.channel.send("そんなコマンドないで。");
        }, 1000);
      case rng <= 6:
        msg.channel.send("ぽやしみ〜");
        return;
      default:
        msg.channel.send("ぽしみ〜");
        return;
    }
  }
});

client.login(DISCORD_TOKEN);
