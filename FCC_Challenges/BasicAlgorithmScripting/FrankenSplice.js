console.log("From Free Code Camp")
console.log()

function frankenSplice(arr1, arr2, n) {
    
    /* Task - Copy each element of the first array into the second array, in order.
    Begin inserting elements at index n of the second array. */
    const arr_r = [...arr2]
    arr_r.splice(n, 0, ...arr1);
    return arr_r
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));  // Outputs - [4, 1, 2, 3, 5, 6]
