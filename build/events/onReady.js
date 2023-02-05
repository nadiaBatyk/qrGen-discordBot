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
exports.onReady = void 0;
const discord_js_1 = require("discord.js");
const config_json_1 = require("../config.json");
const _CommandList_1 = require("../commands/_CommandList");
const onReady = (client) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const rest = new discord_js_1.REST({ version: "10" }).setToken(config_json_1.token);
    const commandData = _CommandList_1.CommandList.map((command) => command.data.toJSON());
    yield rest.put(discord_js_1.Routes.applicationGuildCommands(((_a = client.user) === null || _a === void 0 ? void 0 : _a.id) || config_json_1.clientId, config_json_1.guildId), { body: commandData });
    console.log("Discord ready!");
});
exports.onReady = onReady;
