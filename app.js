const Discord = require("discord.js");
const client = new Discord.Client();

const { DISCORD_POSHIMI_TOKEN } = process.env;
const reactionWordList = ["ぽしみ", "ぽやしみ", "ぽやすみ"];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  if (
    !msg.author.bot &&
    reactionWordList.some((word) => msg.content.includes(word))
  ) {
    msg.channel.send(Math.random() * 100 > 1 ? "ぽしみ〜" : "ぽやしみ〜");
  }
});

client.login(DISCORD_POSHIMI_TOKEN);
