console.log("From Free Code Camp")
console.log()

function sumAll(arr) {

    /* Task - We'll pass you an array of two numbers. Return the sum of
    those two numbers plus the sum of all the numbers between them.*/
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return ((max - min + 1 )/2) * (max + min)
}

console.log(sumAll([4,1]))
