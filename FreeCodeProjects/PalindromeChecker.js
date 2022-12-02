console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function palindrome(str) {

    /* Given a string, this function returns 'true' for a palindrome and 'false' otherwise. */
    str = str.toLowerCase().match(/[a-zA-Z0-9]/gi)
    return str.join('') == str.reverse().join('')
}
  
console.log(palindrome("1 eye for of eye 1."))  // Outputs - true.

/* A palindrome is a word or sentence that's spelled the same 
way both forward and backward, ignoring punctuation, case, and spacing.*/
