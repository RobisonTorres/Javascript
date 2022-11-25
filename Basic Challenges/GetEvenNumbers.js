console.log("From Code Wars")
console.log()

function getEvenNumbers(numbersArray){
    
    // This function filters out the odd numbers from an array.
    let ever_numbers = numbersArray.filter(e => e % 2 == 0)
    return ever_numbers
}

console.log(getEvenNumbers([2,4,5,6]))  // Outputs - [2, 4, 6]
