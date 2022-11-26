console.log("From Code Wars")
console.log()

const binaryArrayToNumber = arr => {
    
    // This function converts an array of numbers
    // into a binary number.
    let binary = parseInt(arr.map(num => String(num)).join(''), 2)
    return binary
};

console.log(binaryArrayToNumber([1, 1, 1, 1]))  // Outputs - 15
