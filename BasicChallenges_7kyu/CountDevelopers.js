console.log("From Code Wars")
console.log()

function countDevelopers(list) {
    
    // Your task is to return the number of JavaScript developers coming from Europe.
    let count = list.filter(function(item){
        return item.continent == 'Europe' && item.language == 'JavaScript'});
    return count.length
    // return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}

console.log(countDevelopers([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ]))  // Outputs - 1
