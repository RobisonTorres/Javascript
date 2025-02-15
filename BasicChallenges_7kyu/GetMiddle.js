console.log("From Code Wars")
console.log()

function getMiddle(s){
  
    /* This function returns two middle characters of a string
    if the length is even, and only one middle character if
    the string length is odd. */
    var index = parseInt(s.length / 2)
    return (s.length % 2 == 0) ? 
    s.slice(index - 1, index + 1): s.slice(index, index + 1);
    // return s.slice((s.length-1)/2, s.length/2+1);
}

console.log(getMiddle("House"))  // Outputs - "u".
