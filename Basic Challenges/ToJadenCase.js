console.log("From Code Wars")
console.log()

String.prototype.toJadenCase = function() {

    // This function capitalizes the first letter of each word.
    const new_list = [];

    // In JavaScript, the "this" keyword refers to an object.
    text = this.split(" ")
    for (let i = 0; i < text.length; i++) {
        new_list.push(text[i].slice(0,1).toUpperCase()
        + text[i].slice(1));
    }
    return new_list.join(" ");

    /* return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); - Clever. */
};

var text = "How can mirrors be real if our eyes aren't real."
console.log(text.toJadenCase())
// Outputs - How Can Mirrors Be Real If Our Eyes Aren't Real
