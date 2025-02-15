console.log("From Code Wars")
console.log()

function XO(str) {
    
    // This function checks whether a string has the same amount of 'x' and 'o's.
    str = str.toLowerCase()
    var x = 0;
    var y = 0
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == "x") {
            x += 1
        }
        else if (str[i] == "o") {
            y += 1
        }
    }
    return (x == y) ? true : false; 
    // return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length; - Clever.
}

console.log(XO("xxoO"))  // Outputs - True.
