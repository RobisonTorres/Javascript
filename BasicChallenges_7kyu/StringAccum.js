console.log("From Code Wars")
console.log()

function accum(s) {
	
    // This function repeats characters based on its position index.
    const list_letters = [];
    var letters = s.split('')
        for (let i = 0; i < s.length; i++) {
            list_letters.push(letters[i].toUpperCase() + '' + 
            letters[i].toLowerCase().repeat(i))
        }
    return list_letters.join("-")
    // return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

console.log(accum("abcd"))  // Outputs - A-Bb-Ccc-Dddd
