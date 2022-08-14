import Lexer from './Lexer'
import Parser from './Parser'
import fs from 'fs'

const userCodefilePath = process.argv[2]

const code = fs.readFileSync(userCodefilePath, 'utf8')

const lexer = new Lexer(code)

lexer.lexAnalysis()

const parser = new Parser(lexer.tokenList)
const rootNode = parser.parseCode()
parser.run(rootNode)
