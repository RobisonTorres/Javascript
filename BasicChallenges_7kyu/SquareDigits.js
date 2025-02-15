console.log("From Code Wars")
console.log()

function squareDigits(num){

    /* This function squares every digit from a number
    and concatenate the result.*/
    const square_numbers = [];
    num = String(num).split('')
    for (let i = 0; i < num.length; i++) {
        square_numbers.push(String(parseInt(num[i]*num[i])));
    }
    return parseInt(square_numbers.join(''));
}

console.log(squareDigits(9119))  // Outputs - 811181

/* Clever.
function squareDigits(num){
    let result = num
    .toString()
    .split("")
    .map( num => parseInt(num) )
    .map( num => num * num )
    .join("")
   
  return parseInt(result)
}*/
