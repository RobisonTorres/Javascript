console.log("From Code Wars")
console.log()

function filter_list(l) {

    // This function removes strings from an array.
    const list_number = [];
    for (let i = 0; i <= l.length; i++) {
        if (Number.isInteger(l[i])) {
            list_number.push(l[i])
        }
    }
    return list_number
    // return l.filter(v => typeof v == "number") - Clever.
}

console.log(filter_list([1,2,'a','b']))
