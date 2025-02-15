console.log("From Code Wars")
console.log()

function factorial(n){

    // This function returns the factorial of any given number.
    result = 1
    while (n > 0) { result *= n;
        n--;
    }
    return result;
}

console.log(factorial(5))  // Outputs - 120
