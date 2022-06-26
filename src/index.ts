// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const { CLIENT_ID, GUILD_ID, DISCORD_TOKEN } = process.env;

if (!CLIENT_ID || !GUILD_ID || !DISCORD_TOKEN) {
  throw new Error('Missing environment variables');
}

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

// Login to Discord with your client's token
client.login(DISCORD_TOKEN);
