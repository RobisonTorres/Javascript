console.log("Test Free - keep it clean.")
console.log()

function findNextSquare(sq) {

    var test = Math.sqrt(sq)
    if (Number.isInteger(test)){
        let x = test+1
        let y = Number.isInteger(x**x)
        while (y == false){
            x += 1};
        return x*x;
    } else {
        return -1;
    }
}

console.log(findNextSquare(100))
console.log(Number.isInteger(Math.sqrt(4**4)))
