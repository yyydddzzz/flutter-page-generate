"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFileSync = exports.makeDirSync = void 0;
const chalk_1 = __importDefault(require("chalk"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const makeDirSync = (driName) => {
    try {
        fs_extra_1.default.mkdirSync(driName);
        console.log(chalk_1.default.white(`generate`), chalk_1.default.yellow(`${driName} lib success.`));
    }
    catch (err) {
        console.error(err);
    }
};
exports.makeDirSync = makeDirSync;
const writeFileSync = (filePath, fileContent) => {
    try {
        fs_extra_1.default.writeFileSync(filePath, fileContent);
        console.log(chalk_1.default.white(`generate`), chalk_1.default.yellow(`${filePath} file success.`));
    }
    catch (err) {
        console.error(err);
    }
};
exports.writeFileSync = writeFileSync;
