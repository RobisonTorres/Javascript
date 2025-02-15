console.log("From Code Wars")
console.log()

var number = function(busStops){

    /* This function calculates the difference between two numbers inside a list,
    nested in another list and return the total.*/
    return busStops.reduce((p, c) => p + c[0] - c[1], 0);

}

console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))  // Outputs - 21
