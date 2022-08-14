"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = __importDefault(require("./Token"));
var TokenType_1 = require("./TokenType");
var Lexer = /** @class */ (function () {
    function Lexer(code) {
        this.pos = 0;
        this.tokenList = [];
        this.code = code;
    }
    Lexer.prototype.lexAnalysis = function () {
        while (this.nextToken()) {
            // console.log('Token')
        }
        this.tokenList = this.tokenList.filter(function (token) { return token.type.name !== TokenType_1.tokenTypesList.SPACE.name; });
        return this.tokenList;
    };
    Lexer.prototype.nextToken = function () {
        if (this.pos >= this.code.length) {
            return false;
        }
        var tokenTypesValues = Object.values(TokenType_1.tokenTypesList);
        for (var i = 0; i < tokenTypesValues.length; i++) {
            var tokenType = tokenTypesValues[i];
            var regex = new RegExp('^' + tokenType.regex);
            var result = this.code.substring(this.pos).match(regex);
            if (result && result[0]) {
                var token = new Token_1.default(tokenType, result[0], this.pos);
                this.pos += result[0].length;
                this.tokenList.push(token);
                return true;
            }
        }
        throw new Error("An error was found at position " + this.pos);
    };
    return Lexer;
}());
exports.default = Lexer;
