console.log("From Code Wars")
console.log()

function isIsogram(str){
    
    // This function determines if a word is an Isogram.
    return new Set(str.toLowerCase()).size == str.toLowerCase().split('').length
}

console.log(isIsogram("AAbbcca"))  // Outputs - False
