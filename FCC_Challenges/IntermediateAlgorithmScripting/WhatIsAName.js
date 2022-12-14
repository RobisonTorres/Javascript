console.log("From Free Code Camp")
console.log()

function whatIsInAName(collection, source) {

    /* Task - Make a function that looks through an array of objects 
    (first argument) and returns an array of all objects that have matching
    name and value pairs (second argument)*/
    let newArr = []
    let keys_col = Object.keys(source)  // ['apple', 'bat']
    for (let i = 0; i < collection.length; i++){ 
        if ((keys_col.every(key => collection[i].hasOwnProperty(key))) &
            keys_col.every(key => collection[i][key] == source[key])) {
            newArr.push(collection[i])
        }
    }
   return newArr
}

console.log(whatIsInAName(
    [{ "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }], 
    { "apple": 1, "bat": 2 }))

// Outputs - [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]
