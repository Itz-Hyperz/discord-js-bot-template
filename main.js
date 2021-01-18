const Discord = require ('discord.js');
const config = require (./config.json);
const client = new Discord.Client()

client.on('ready', () => {
  console.log("Bot is now active, template by Hyperz#0001)
}).catch(console.error);

client.login(config["main_config"].token)
