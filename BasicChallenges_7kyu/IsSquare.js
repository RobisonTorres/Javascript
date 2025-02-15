console.log("From Code Wars")
console.log()

var isSquare = function(n){
   
    // This function determines if a number is or not a square number.
    return Number.isInteger(n ** (1/2))
}

console.log(isSquare(25))  // Outputs - True.

/* In mathematics, a square number
or perfect square is an integer that is the square of an integer;
in other words, it is the product (25) of some integer with itself (5 * 5).*/
