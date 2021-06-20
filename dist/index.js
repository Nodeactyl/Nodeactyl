"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientIndex_1 = __importDefault(require("./client/clientIndex"));
const appIndex_1 = __importDefault(require("./app/appIndex"));
exports.default = {
    NodeactylClient: clientIndex_1.default,
    NodeactylApp: appIndex_1.default
};
