console.log("From Code Wars")
console.log()

function maskify(cc) {

    // This function hides sensitive information, like a credit card number.
    var mask = cc.replace(/[a-z 0-9]/gi, "#")  // [^a-z 0-9] ^ means not.
    return (cc.length > 4) ? 
    mask.slice(0, -4) + cc.slice(-4): cc;
}

console.log(maskify("11111"))  // Outputs - #1111
