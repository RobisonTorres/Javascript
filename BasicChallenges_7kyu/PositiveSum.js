console.log("From Code Wars")
console.log()

function positiveSum(arr) {

    // This function returns the sum of all positives numbers of an array.
    var x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            x += arr[i];
        }
    }
    return x;
    // return arr.reduce((s,v) => v > 0 ? s + v : s, 0); - Clever.
}

console.log(positiveSum([1, -2, 3, 4, 5]))  // Outputs - 13
