console.log("From Code Wars")
console.log()

function highAndLow(numbers){
    
    /* This function takes a string of numbers and returns the max 
    and min numbers separated by space.*/
    let nums = numbers.split(" ").map(num => parseInt(num))
    return String(Math.max(...nums)) + " " + String(Math.min(...nums))
    /* "…" in front of an array will convert array to distinct
    variables and send them to the function.*/
}

console.log(highAndLow("1 2 3 4 5"))
