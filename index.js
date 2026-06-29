require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

const welcome = require("./events/guildMemberAdd.js");

client.on("guildMemberAdd", (member) => {
  welcome.execute(member);
});

client.once("ready", () => {
  console.log(`Bot is online as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
