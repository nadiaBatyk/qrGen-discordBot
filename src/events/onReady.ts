import { Client, REST, Routes } from "discord.js";
import { token, clientId, guildId } from "../config.json";
import { CommandList } from "../commands/_CommandList";
export const onReady = async (client: Client) => {
  const rest = new REST({ version: "10" }).setToken(token as string);
  const commandData = CommandList.map((command) => command.data.toJSON());
  await rest.put(
    Routes.applicationGuildCommands(client.user?.id || clientId, guildId as string),
    { body: commandData }
  );
  console.log("Discord ready!");
};
