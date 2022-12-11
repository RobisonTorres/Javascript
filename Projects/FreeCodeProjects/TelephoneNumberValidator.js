console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function telephoneCheck(str) {
    
    /* This function returns true if the passed string looks like a valid US phone number.*/
    let pattern1 = new RegExp(/^^[1]?[\s]?[(][0-9]{3}[)][-\s]?[0-9]{3}[-\s]?[0-9]{4}$|^^[1]?[\s]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/)
    return pattern1.test(str)
}

console.log(telephoneCheck("1 555-555-5555"))  // Outputs - true.

/* Project description:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
*/
