console.log("From Code Wars")
console.log()

function removeString(str) {

    // This function removes the first and last characters of a string.
    return str.slice(1,-1);
}

console.log(removeString("house"))  // Outputs - ous
console.log(removeString("false"))  // Outputs - als

var text = "world"
console.log(text(0,1))