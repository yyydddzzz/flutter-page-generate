#!/usr/bin/env node
"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const flutter_page_generate_1 = __importDefault(require("../lib/flutter-page-generate"));

/**
 * generate flutter page
 */
 commander_1.default
 .command('init <page-name>')
 .description('  Generate new flutter getx page from monia.')
 .action((name, cmd) => {
 flutter_page_generate_1.default(name);
});

commander_1.default.parse(process.argv);