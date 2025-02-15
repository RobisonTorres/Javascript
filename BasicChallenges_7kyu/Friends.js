console.log("From Code Wars")
console.log()

function friend(friends){
    
    // This function filters a list of names and returns
    // those who has names with four letters.
    return friends.filter(v => v.length == 4)
}
  
console.log(friend(["Ryan", "Kieran", "Mark"]))  // Outputs - [ 'Ryan', 'Mark' ]
