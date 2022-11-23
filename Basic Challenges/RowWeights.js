console.log("From Code Wars")
console.log()

function rowWeights(array){

    /* Task - (...) Given an array of positive integers (the weights of the people)
    return a new array/tuple of two integers, where the first one is the total
    weight of team 1, and the second one is the total weight of team 2. */
    const first_team = []
    const second_team = []
    for (let i = 0; i < array.length; i++){
        if (i % 2 == 0) {
            first_team.push(array[i])
        } else {
            second_team.push(array[i])
        }            
    }
    var sum_first_team = first_team.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0)

    var sum_second_team = second_team.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0)
        return [sum_first_team, sum_second_team]
}

console.log(rowWeights([13, 27, 49]))  // Outputs - [62, 27]
/* - Clever.
function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  return [t1, t2]
}
*/
