console.log("From Code Wars")
console.log()

function summation(num) {
    
    // This function sums all numbers between 1 and the given number "n".
      var x = 0;
      for (let i = 0; i <= num; i++) {
            x += i;
      }
      return x
}
 
console.log(summation(8))  // Outputs - 36
