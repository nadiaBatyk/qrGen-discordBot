import { Client, Events, GatewayIntentBits, Interaction } from "discord.js";
import { CommandList } from "./commands/_CommandList";
import { onReady } from "./events/onReady";

import { token } from "./config.json";
(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  client.once(Events.ClientReady, async () => await onReady(client));
  client.on(Events.InteractionCreate, async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;
    for (const Command of CommandList) {
      if (interaction.commandName === Command.data.name) {
        await Command.run(interaction);
        break;
      }
    }
  });
  await client.login(token);
})();
