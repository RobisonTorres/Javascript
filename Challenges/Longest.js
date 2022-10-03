console.log("From Code Wars")
console.log()

function longest(s1, s2) {

    // This function returns a sorted combination of two strings without repetition.
    return [...new Set(s1+s2)].sort().join('')
}

console.log(longest("text", "texty"))
