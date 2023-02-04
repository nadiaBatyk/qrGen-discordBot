import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Interaction } from "discord.js";
import { Command } from "../interfaces/Command";

export const saludo: Command = {
  data: new SlashCommandBuilder()
    .setName("hola")
    .setDescription("Te responde como estas??"),
  async run(interaction: CommandInteraction) {
    await interaction.reply("Como estas??");
  },
};
