console.log("From Free Code Camp")
console.log()

function diffArray(arr1, arr2) {

    /* Task - Compare two arrays and return a new array with any items only 
    found in one of the two given arrays, but not both.*/ 
    let diffArray1 = arr1.filter(item => !arr2.includes(item)).join('')
    let diffArray2 = arr2.filter(item => !arr1.includes(item)).join('')
    const newArr = [diffArray1, diffArray2].filter(i => i != '')
    return newArr

}
  
console.log(diffArray(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]))
