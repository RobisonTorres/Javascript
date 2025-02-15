console.log("From Free Code Camp")
console.log()

function confirmEnding(str, target) {

    /* Task - Check if a string (first argument, str) ends with 
    the given target string (second argument, target). */
    let len_target = target.length
    let str_ending = str.slice(len_target * - 1)
    return str_ending == target;
    //return str.endsWith(target)
}
  
console.log(confirmEnding("Congratulation", "on"));  // Outputs - true
