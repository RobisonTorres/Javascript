console.log("From Code Wars")
console.log()

function positiveSum(arr) {

    // This function returns the sum of all positives numbers of an array.
    x = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            x += arr[i];
        }
    }
    return x;
}

console.log(positiveSum([1, -2, 3, 4, 5]))
