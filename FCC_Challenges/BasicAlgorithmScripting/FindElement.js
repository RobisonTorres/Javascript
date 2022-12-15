console.log("From Free Code Camp")
console.log()

function findElement(arr, func) {

    /* Task - Create a function that looks through an array arr and 
    returns the first element in it that passes a 'truth test'. 
    This means that given an element x, the 'truth test' is passed 
    if func(x) is true. If no element passes the test, return undefined.*/
    let num = arr.find(func)
    return num;
}
  
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));  // Outputs - 8

/*
The Array.prototype.find() method is similar to the Array.prototype.filter()
method, but it stops searching the array as soon as it finds the first 
element that satisfies the condition defined by the callback function.
*/
