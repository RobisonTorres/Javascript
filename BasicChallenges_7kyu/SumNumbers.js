console.log("From Code Wars")
console.log()

function sumTwoSmallestNumbers(numbers) {  
    
    // This function sums the two smallest numbers of an array.
    numbers = numbers.sort((a,b)=>a-b)
    return numbers[0] + numbers[1]
    // numbers.sort((a,b)=> a-b).slice(0, 2).reduce((a,b)=> a+b) - Clever.
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))  // Outputs - 13
