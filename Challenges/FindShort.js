console.log("From Code Wars")
console.log()

function findShort(s){

    // This function returns the length of the shortest word.
    return Math.min(...s.split(' ').map(word => word.length));
}

console.log(findShort("bitcoin take over the world"))  // Outputs - 3
