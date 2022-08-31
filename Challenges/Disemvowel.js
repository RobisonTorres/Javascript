console.log("From Code Wars")
console.log()

function disemvowel(str) {

    // This function removes vowels from a string.
    return str.replace(/[aeiou]/ig, ""); // ig - insensitive case global
}

console.log(disemvowel("This website is for losers LOL!"))
// Outputs - Ths wbst s fr lsrs LL!
