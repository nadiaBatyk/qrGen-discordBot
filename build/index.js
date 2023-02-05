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
const discord_js_1 = require("discord.js");
const _CommandList_1 = require("./commands/_CommandList");
const onReady_1 = require("./events/onReady");
const config_json_1 = require("./config.json");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
    client.once(discord_js_1.Events.ClientReady, () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, onReady_1.onReady)(client); }));
    client.on(discord_js_1.Events.InteractionCreate, (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        if (!interaction.isChatInputCommand())
            return;
        for (const Command of _CommandList_1.CommandList) {
            if (interaction.commandName === Command.data.name) {
                yield Command.run(interaction);
                break;
            }
        }
    }));
    yield client.login(config_json_1.token);
}))();
