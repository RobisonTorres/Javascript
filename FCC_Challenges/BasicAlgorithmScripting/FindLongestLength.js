console.log("From Free Code Camp")
console.log()

function findLongestWordLength(str) {

    // This function returns the longest's word length.
    let max_length = Math.max(...str.split(' ').map(l => l.length))
    return max_length
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// Outputs - 6
