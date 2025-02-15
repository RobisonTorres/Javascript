console.log("From Code Wars")
console.log()

function openOrSenior(data){

    /* This function categorizes a person as 'Senior' or 'Open'
    based on his/ her age and 'handicap'.*/
    let result = [];
    for (let i = 0; i < data.length; i++) {
        (data[i][0] >= 55 && data[i][1] > 7) ? result.push('Senior') : result.push('Open')
    }
    return result
    // return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open'); Clever.
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
// Outputs - ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']
