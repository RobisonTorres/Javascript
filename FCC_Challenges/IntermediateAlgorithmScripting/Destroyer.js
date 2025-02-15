console.log("From Free Code Camp")
console.log()

function destroyer(arr) {
    
    /* Task - You will be provided with an initial array followed by one or more arguments. 
    Remove all elements from the initial array that are of the same value as these arguments.*/
    var args = Array.prototype.slice.call(arguments) // It turns the arguments into a list.
    let numbers = args[0]
    args =  args.splice(1, args.length - 1);
    return numbers.filter(num => !args.includes(num))

}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3,))  // Outputs - [1, 1]
