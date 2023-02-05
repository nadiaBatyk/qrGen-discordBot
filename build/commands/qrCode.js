"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.qrCode = void 0;
const discord_js_1 = require("discord.js");
exports.qrCode = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName("createqr")
        .setDescription("Creates a QR code")
        .addStringOption((option) => option
        .setName("data")
        .setDescription("Data to show on QRCODE")
        .setRequired(true)
        .setMinLength(5))
        .addIntegerOption((option) => option.setName("h").setDescription("The height of your QRcode"))
        .addIntegerOption((option) => option.setName("w").setDescription("The width of your QRcode")),
    run(interaction) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            const texto = (_c = (_b = (_a = interaction.options
                .get("data")) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.toLocaleString().split(" ").join("%")) !== null && _c !== void 0 ? _c : "";
            const h = (_f = (_e = (_d = interaction.options.get("h")) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.toLocaleString()) !== null && _f !== void 0 ? _f : "150";
            const w = (_j = (_h = (_g = interaction.options.get("w")) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.toLocaleString()) !== null && _j !== void 0 ? _j : "150";
            const exampleEmbed = new discord_js_1.EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle("Your QR code")
                .setURL("https://discord.js.org/")
                .setImage(`https://chart.googleapis.com/chart?cht=qr&chs=${h}x${w}&chl=${texto}`)
                .setTimestamp();
            yield interaction.reply({ embeds: [exampleEmbed] });
        });
    },
};
