console.log("From Code Wars")
console.log()

function isTriangle(a,b,c){
   
    /* Implement a function that accepts 3 integer values a, b, c. 
    The function should return true if a triangle can be built 
    with the sides of given length and false in any other case. */
    return a + b > c && b + c > a && a + c > b
}
console.log(isTriangle(1, 2, 2))  // Outputs - True.
