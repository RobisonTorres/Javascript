console.log("From Code Wars")
console.log()

function openOrSenior(data){

    /* This function categorizes a person as 'Senior' or 'Open'
    based on his/ her age and 'handicap'.*/
    let result = [];
    var x = 0;
    while (x < data.length) {
        if (data[x][0] >= 55 && data[x][1] > 7){
            result.push('Senior')
            x += 1
        } else {
            result.push('Open')
            x += 1
        };
    }
    return result
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6],
                         [21, 21], [78, 9]]))
