console.log("From Code Wars")
console.log()

function nbYear(p0, percent, aug, p) {
    
    // This function calculates how many years it necessary
    // to reach a future population.
    years = 0
    while (p0 < p) {
        p0 += Math.floor(p0 * (percent/100) + aug)
        years += 1
    }
    return years

}

console.log(nbYear(1500, 5, 100, 5000))  // Outputs - 15 years.
