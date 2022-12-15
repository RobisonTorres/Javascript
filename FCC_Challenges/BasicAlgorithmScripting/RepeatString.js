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
    // return str.repeat(num)
}
  
console.log(repeatStringNumTimes("abc", 3));
