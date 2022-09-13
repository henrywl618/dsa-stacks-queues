const Stack = require("./stack");

const reverseString = (string)=>{
    const stringStack = new Stack();
    let output = '';

    for(let char of string){
        stringStack.push(char)
    }

    let currentNode = stringStack.first;

    while(currentNode){
        output += currentNode.val;
        currentNode = currentNode.next;
    }

    return output
};

console.log(reverseString('reverse'))