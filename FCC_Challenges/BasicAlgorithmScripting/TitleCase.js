console.log("From Free Code Camp")
console.log()

function titleCase(str) {

    /* Task - Return the provided string with the first letter of
    each word capitalized. Make sure the rest of the word is in lower case.*/
    return str.toLowerCase().split(' ')
    .map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

}
  
console.log(titleCase("I'm a little tea pot"));  // Outputs - I'm A little Tea Pot
