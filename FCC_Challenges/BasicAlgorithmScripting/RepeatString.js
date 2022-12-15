console.log("From Free Code Camp")
console.log()

function repeatStringNumTimes(str, num) {

    // Given a string, this function repeats it a n (num) number of times.
    let result = '';
    while (num  > 0) {
        result += str;
        num--;
    }
    return result;
    // return new Array(num + 1).join(str);
}
  
console.log(repeatStringNumTimes("abc", 3));  // Outputs - abcabcabc
