console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function checkCashRegister(price, cash, cid) {

    // This function...
    let change = [];
    let x = 8;  // current units
    let values = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100]
    let change_cash = (cash - price).toFixed(2);
    
    while (x >= 0 && change_cash >= 0) {

        if (change_cash % cid[x][1] < change_cash){
            change.push(cid[x][0], cid[x][1])
            change_cash = (change_cash - cid[x][1]).toFixed(2)
            
        } else if (change_cash % cid[x][1] == change_cash && (change_cash/ values[x]) >= 1 ){
            change.push(cid[x][0], parseInt(change_cash / values[x]) * values[x])
            change_cash = (change_cash - parseInt(change_cash / values[x]) * values[x]).toFixed(2)
        }
        x--;
    }
    return change;
}

console.log(checkCashRegister(19.50, 20, 
    [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

/* Outputs - ['TWENTY',  60, 'TEN', 20, 'FIVE', 15, 
              'ONE', 1, 'QUARTER', 0.5, 'DIME', 0.2,
              'PENNY',   0.04
]*/
