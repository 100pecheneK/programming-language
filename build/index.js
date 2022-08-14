"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lexer_1 = __importDefault(require("./Lexer"));
var Parser_1 = __importDefault(require("./Parser"));
var fs_1 = __importDefault(require("fs"));
var userCodefilePath = process.argv[2];
var code = fs_1.default.readFileSync(userCodefilePath, 'utf8');
var lexer = new Lexer_1.default(code);
lexer.lexAnalysis();
var parser = new Parser_1.default(lexer.tokenList);
var rootNode = parser.parseCode();
parser.run(rootNode);
