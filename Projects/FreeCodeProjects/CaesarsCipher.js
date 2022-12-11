console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function rot13(str) {

    /* This function takes a ROT13 encoded string as 
    input and returns a decoded string.*/
    let encoder = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let decoder = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
    let message = ''
    for (let i = 0; i < str.length; i++) {
        if (/^[A-Z]$/i.test(str[i])) {
            message += decoder[encoder.indexOf(str[i])];
        } else {
            message += str[i];
        }
    }
    return message
}

console.log(rot13("SERR PBQR PNZC"))  // Outputs - FREE CODE CAMP

/* Project description:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
*/
