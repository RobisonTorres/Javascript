console.log("From Free Code Camp")
console.log()

function whatIsInAName(collection, source) {

    // This function...
    let newArr = []
    let keys_collections = []
    for (let i = 0; i < collection.length; i++){
        newArr.push(collection[i]);
        keys_collections.push(Object.keys(collection[i]))
    }
    return new Set(keys_collections.flat(1))
}

console.log(whatIsInAName(
            [{ first: "Romeo", last: "Montague" }, 
            { first: "Mercutio", last: 'null' }, 
            { first: "Tybalt", last: "Capulet" }], 
            { first: "Tybalt", last: "Capulet"}));
