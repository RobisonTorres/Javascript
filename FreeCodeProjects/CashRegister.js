console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function checkCashRegister(price, cash, cid) {

    // This function...
    let change = [];
    let x = 8;  // Current units
    let change_cash = (cash - price).toFixed(2);
    while (x >= 0) {
        if (){  // TODO - Condition
            change.push([cid[x][0], (cid[x][1] % change_cash).toFixed(2)]);
            change_cash = (change_cash % cid[x][1]).toFixed(2);
        }
        x--;
    }
    return change;
}

console.log(checkCashRegister(19.5, 20, 
                    [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
                    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
                    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
