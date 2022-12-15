console.log("From Free Code Camp")
console.log()

function largestOfFour(arr) {

    // This function returns the max number of each array.
    return arr.map(n => Math.max(...n));
}
  
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// Outputs - [5, 27, 39, 1001]
