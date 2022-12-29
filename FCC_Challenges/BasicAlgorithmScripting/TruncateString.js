console.log("From Free Code Camp")
console.log()

function truncateString(str, num) {

    /* Task - Truncate a string (first argument) if it is longer 
    than the given maximum string length (second argument).
    Return the truncated string with a ... ending. */
    return (str.length > num) ? str.slice(0, num) + "...": str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
// Outputs - A-tisket...
