const Stack = require('./stack');

const isBracketsBalanced= (string)=>{
    const bracketStack = new Stack;
    const openingBrackets = "({[";
    const closingBrackets = ")}]"

    const compareBracket = (bracket)=>{
        switch(bracket){
            case ")":
                return bracket === ""
        }
    };

    for(let char of string){
        if(openingBrackets.includes(char)){
            bracketStack.push(char);
        }else if (closingBrackets.includes(char)){
            if(char === ")" && bracketStack.peek() === "("){
                bracketStack.pop();
            } else if(char === "}" && bracketStack.peek() === "{"){
                bracketStack.pop();
            } else if(char === "]" && bracketStack.peek() === "["){
                bracketStack.pop();
            } 
        }
    }

    return bracketStack.size === 0 ? true : false;
};

console.log(isBracketsBalanced("((ok) [nope)]"))
