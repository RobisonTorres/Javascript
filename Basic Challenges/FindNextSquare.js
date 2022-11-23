console.log("From Code Wars")
console.log()

function findNextSquare(sq) {

    /* Given an integer 'sq', it returns -1 for no square numbers,\
    and the next square number otherwise.*/
    return (Number.isInteger(Math.sqrt(sq))) ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

console.log(findNextSquare(4))  // Outputs - 9
