console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function palindrome(str) {

    /* Given a string, this function returns 'true' 
    for a palindrome and 'false' otherwise. */
    str = str.toLowerCase().match(/[a-zA-Z0-9]/gi)
    return str.join('') == str.reverse().join('')
}
  
console.log(palindrome("1 eye for of eye 1."))  // Outputs - true.

/* Palindrome Checker - Project specifications: 

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward
and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything into 
the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/
