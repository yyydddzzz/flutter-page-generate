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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ora_1 = __importDefault(require("Ora"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const file_1 = require("./file");
const formatName_1 = require("./formatName");
const template_1 = require("./template");
const flutterPageGenerate = (pageName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cwd = process.cwd();
        const pageLineName = formatName_1.toBottomLine(pageName);
        const targetDir = path_1.default.resolve(cwd, pageLineName);
        console.log(chalk_1.default.white(`✨  Generate page in ${chalk_1.default.yellow(targetDir)}.`));
        const spinner = Ora_1.default({
            text: `Generating, it's will not be wait long...\n`
        });
        spinner.start();
        const pageViewContent = template_1.pageView(pageName);
        const pageControllerContent = template_1.pageController(pageName);
        const pageBindingsContent = template_1.pageBindings(pageName);
        const pageModelContent = template_1.pageModel();
        file_1.makeDirSync(pageLineName);
        file_1.writeFileSync(`${targetDir}/${pageLineName}_page.dart`, pageViewContent);
        file_1.writeFileSync(`${targetDir}/${pageLineName}_controller.dart`, pageControllerContent);
        file_1.writeFileSync(`${targetDir}/${pageLineName}_binding.dart`, pageBindingsContent);
        file_1.writeFileSync(`${targetDir}/${pageLineName}_model.dart`, pageModelContent);
        spinner.stop();
        console.log(chalk_1.default.white(`\n🎉  Successfully generate page`), chalk_1.default.yellow(`${pageName}.`));
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = flutterPageGenerate;
