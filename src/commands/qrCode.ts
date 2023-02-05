import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/Command";

export const qrCode: Command = {
  data: new SlashCommandBuilder()
    .setName("createqr")
    .setDescription("Creates a QR code")
    .addStringOption((option) =>
      option
        .setName("data")
        .setDescription("Data to show on QRCODE")
        .setRequired(true)
        .setMinLength(5)
    )
    .addIntegerOption((option) =>
      option.setName("h").setDescription("The height of your QRcode")
    )
    .addIntegerOption((option) =>
      option.setName("w").setDescription("The width of your QRcode")
    ),
  async run(interaction) {
    const texto =
      interaction.options
        .get("data")
        ?.value?.toLocaleString()
        .split(" ")
        .join("%") ?? "";
    const h = interaction.options.get("h")?.value?.toLocaleString() ?? "150";
    const w = interaction.options.get("w")?.value?.toLocaleString() ?? "150";

    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Your QR code")
      .setURL("https://discord.js.org/")
      .setImage(
        `https://chart.googleapis.com/chart?cht=qr&chs=${h}x${w}&chl=${texto}`
      )
      .setTimestamp();

    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
