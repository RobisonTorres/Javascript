console.log("From Code Wars")
console.log()

function arrayDiff(a, b) {
    
    // This function removes items in array a if they are also present in array b.
    return a.filter(num => !b.includes(num))

}

console.log(arrayDiff([1,2,2,2,3],[2]))  // Outputs - [1, 3]
