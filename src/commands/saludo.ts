import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Interaction } from "discord.js";
import { Command } from "../interfaces/Command";

export const saludo: Command = {
  data: new SlashCommandBuilder()
    .setName("createqr")
    .setDescription("Creates a QR code")
    .addStringOption((option) =>
      option.setName("input").setDescription("Data to show on QRCODE").setRequired(true).setMinLength(5)
    )
    .addAttachmentOption((option) =>
      option.setName("fotito").setDescription("la fotito que va al qr")
    ),
  async run(interaction) {
    const texto = interaction.options.get('input')?.value?.toLocaleString()
    await interaction.reply(`Holis ${interaction.user.username}! Esto es lo que va en tu QR ${texto}`);
  },
};
