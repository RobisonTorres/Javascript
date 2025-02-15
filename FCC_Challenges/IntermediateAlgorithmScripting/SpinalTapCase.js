console.log("From Free Code Camp")
console.log()

function spinalCase(str) {
    
    // Task - Convert a string to spinal case. 
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2')  // separate lower characters from upper ones.
    str = str.replace(/[\W_/]+/g, '-')  // replace all special characters to "-".
    str = str.toLowerCase()
   return str;
}

console.log(spinalCase("AllThe-small Things"))  // Outputs - all-the-small-things.
