console.log("Test Free - keep it clean.")
console.log()

function descendingOrder(n){
    
    /* This function takes any given number and returns 
    its digits in descend order.*/
    return parseInt(String(n).split('')
    .sort((a,b)=>b-a) // This operation reverses the order.
    .join(''))   
}

console.log(descendingOrder(586915)) // Outputs - 986551
