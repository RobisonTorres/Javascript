console.log("From Code Wars")
console.log()

function squareSum(numbers){

    /* Task - Complete the square sum function so that it squares each number 
    passed into it and then sums the results together. */
    return numbers.reduce((p, c) => p + c ** 2, 0)
}

console.log(squareSum([1, 2, 2]))  // Outputs - 9
