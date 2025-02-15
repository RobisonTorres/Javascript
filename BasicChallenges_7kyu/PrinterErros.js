console.log("From Code Wars")
console.log()

function printerError(s) {
    
    // This function counts letters above letter 'n' in a string,\
    // and show the result beside the total amount of letters.
    let errors = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] > "m") {
            errors += 1
        }
    }
    return String(errors) + "/" + String(s.length)
}

console.log(printerError("House"))  // Outputs - 3/5
