console.log("From Code Wars")
console.log()

function getSum(a, b) {
    
    // This function sums all numbers between "a" and "b".
    let number = [a, b].sort((a,b)=>a-b);
    let x = 0;
    for (let i = number[0]; i <= number[1]; i++) {
        x += i;
    }
    return x
}

console.log(getSum(-1, 2))
