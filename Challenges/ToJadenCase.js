console.log("From Code Wars")
console.log()

String.prototype.toJadenCase = function() {

    // This function capitalizes the first letter of each word.
    return this.split(' ').
    map(item => item[0].toUpperCase() + item.slice(1)).
    join(' ')
};

var text = "How can mirrors be real if our eyes aren't real."
console.log(text.toJadenCase())
// Outputs - How Can Mirrors Be Real If Our Eyes Aren't Real
