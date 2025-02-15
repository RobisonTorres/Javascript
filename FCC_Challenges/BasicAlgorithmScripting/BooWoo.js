console.log("From Free Code Camp")
console.log()

function booWho(bool) {

    /* Task - Check if a value is classified as
    a boolean primitive. Return true or false. */
    return typeof bool === "boolean";
}
  
console.log(booWho(null));  // Outputs - false
