console.log("From Free Code Camp")
console.log()

function factorialize(num) {
    
   // This function returns the factorial of any given number.
   let result = 1
   while (num > 0) { result *= num;
       num--;
   }
   return result;;
}
  
console.log(factorialize(5))  // Outputs - 120
