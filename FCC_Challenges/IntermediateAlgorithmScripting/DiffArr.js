console.log("From Free Code Camp")
console.log()

function diffArray(arr1, arr2) {

    /* Task - Compare two arrays and return a new array with any items only 
    found in one of the two given arrays, but not both.*/ 
    let diffArray1 = arr1.filter(item => !arr2.includes(item))
    let diffArray2 = arr2.filter(item => !arr1.includes(item))
    const newArr = diffArray1.concat(diffArray2)
    return newArr

}
  
console.log(diffArray(
            ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
            ["diorite", "andesite", "grass", "dirt", "dead shrub"]))  // Outputs - ['pink wool']
