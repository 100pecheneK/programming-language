"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenTypesList = void 0;
var TokenType = /** @class */ (function () {
    function TokenType(name, regex) {
        this.name = name;
        this.regex = regex;
    }
    return TokenType;
}());
exports.default = TokenType;
exports.tokenTypesList = {
    NUMBER: new TokenType('NUMBER', '[0-9]*'),
    VARIABLE: new TokenType('VARIABLE', '[a-z]*'),
    SEMICOLON: new TokenType('SEMICOLON', ';'),
    SPACE: new TokenType('SPACE', '[ \\n\\t\\r]'),
    ASSIGN: new TokenType('ASSIGN', 'ASSIGN'),
    LOG: new TokenType('LOG', 'LOG'),
    PLUS: new TokenType('PLUS', 'PLUS'),
    MINUS: new TokenType('MINUS', 'MINUS'),
    LPAR: new TokenType('LPAR', '\\('),
    RPAR: new TokenType('RPAR', '\\)'),
};
