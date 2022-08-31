console.log("From Code Wars")
console.log()

function getCount(str) {

    // This function returns the numbers of vowels in the given string.
    var x = 0
    var lowerCase = str.toLowerCase()
    for (let i = 0; i < lowerCase.length; i++) {
        if ("aeiou".includes(lowerCase[i])) {
            x += 1;
        }
    }
    return x
    
    // return (str.match(/[aeiou]/ig)||[]).length; - Clever.
}
console.log(getCount("chai"))  // Outputs - 2
