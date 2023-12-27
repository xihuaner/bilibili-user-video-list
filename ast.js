const parser = require("@babel/parser");
const template = require("@babel/template").default;
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const { error } = require("console");
const generator = require("@babel/generator").default;
const fs = require("fs");
const path = require('path');

var jscode = fs.readFileSync("main.js", { encoding: "utf-8"});

eval(fs.readFileSync("ob.js", { encoding: "utf-8"}))
var call;

const Expressions = {
    // ExpressionStatement(path){
    //     node = path.node
    //     // console.log(node)
    //     console.log(generator(node,{}).code)
    // },
    CallExpression(path){
        node = path.node
        if(node.callee.name && node.callee.name.length == 1 && node.callee.name != 'n'){
            // console.log(node.callee.name)
            if(node.callee.name == 'N'){
                call = generator(node.callee);
            }
            node.callee.name = 'N';
            if(node.arguments && node.arguments[0] && typeof node.arguments[0].value == 'number' && node.arguments[0].value > 498){
                code = generator(node,{}).code
                res = eval(code)
                // console.log(res)
                if(typeof res == 'string'){
                    path.replaceWithSourceString('"' + res + '"')
                }
                
            }
        }
        
        // console.log(generator(node,{}).code)
    }
}


let ast = parser.parse(jscode);
traverse(ast,Expressions)

code = generator(ast,{minified: false}).code
console.log(call.code)
fs.writeFile('unobscure.js', code, (error) => {})