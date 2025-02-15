console.log("From Code Wars")
console.log()

function validatePIN (pin) {

    // This function will check first if all characters are numeric,
    // then if it has only 4 or 6 digits.
    return (/^(?=[0-9]*$)(.{4}|.{6})$/.test(pin))
    
}

console.log(validatePIN("1234"))  // Outputs - True.
