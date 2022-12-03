console.log("From Code Wars")
console.log()

function sumOfMinimums(arr) {
    
    /* This function finds the minimum values of each
    array and sums the result.*/
    sum = []
    for (let i = 0; i < arr.length; i++){
        sum.push(Math.min(...arr[i]))           
    }
    return sum.reduce((a, c) => a + c, 0)
    // return arr.reduce((p, c) => p + Math.min(...c), 0);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2],
                           [6, 3, 5, 4, 3],
                           [5, 8, 7, 4, 5]]))  // Outputs - 9
                           