console.log("From Free Code Camp")
console.log()

function diffArray(arr1, arr2) {

    /* Task - Compare two arrays and return a new array with any items only 
    found in one of the two given arrays, but not both.*/ 
    // return l.filter(v => typeof v == "number") - Clever.
    //return arr1.filter(v => !(v in arr2))
    return arr1.filter(num => num in arr2)
    
    //const newArr = [];
    //return newArr;
  }
  
console.log(diffArray([1, 2, 3, 4], [1, 2, 3, 5, 6]))
arr1 = [1, 2, 3, 4]
arr2 = [1, 2, 3, 5, 6]
console.log(arr1.filter(num => num in arr2))
