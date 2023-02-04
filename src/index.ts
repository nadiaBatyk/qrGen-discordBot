import {
  BaseInteraction,
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  Interaction,
} from "discord.js";
import token from "./config.json";
import fs from "fs";
import path from "path";
import { CommandList } from "./commands/_CommandList";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

/* client.once(Events.ClientReady, (c) => {
	console.log(`Listo, loggueado como ${c.user.tag}`);
});
client.login(token.token); */
client.commands = new Collection();


client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  for(const Command of CommandList){
    if(interaction.commandName === Command.data.name){
      await Command.run(interaction)
      break;
    }
  }
});
