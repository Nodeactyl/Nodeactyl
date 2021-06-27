"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeactylApp = exports.NodeactylClient = void 0;
const clientIndex_1 = __importDefault(require("./client/clientIndex"));
exports.NodeactylClient = clientIndex_1.default;
const appIndex_1 = __importDefault(require("./app/appIndex"));
exports.NodeactylApp = appIndex_1.default;
