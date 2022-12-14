console.log("From Free Code Camp")
console.log()

function whatIsInAName(collection, source) {

    // This function...
    let newArr = []
    for (let i = 0; i < collection.length; i++){
        if ((Object.keys(source)).includes(Object.keys(collection[i]))) /*&
            (Object.values(collection[i])).includes(Object.values(source)))*/
            newArr.push(Object.values(collection[i]));
        
    }
    return newArr
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
            { first: "Mercutio", last: 'null' }, 
            { first: "Tybalt", last: "Capulet" }], 
            { last: "Capulet" }));

let names = { first: "Romeo", last: "Capulet" }
let invite = { last: "Capulet" }

console.log(Object.values(names).filter(num => Object.values(invite).includes(num)))