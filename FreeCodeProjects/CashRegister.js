console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function checkCashRegister(price, cash, cid) {

    // This function...
    let change = [];
    let x = 8;  // current units
    let values = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100]
    let change_cash = (cash - price).toFixed(2);
    while (x >= 0 && change_cash >= 0) {
        if ((change_cash / values[x]) >= 1) {
            change.push([cid[x][0], (parseInt(change_cash / values[x]) * values[x]).toFixed(2)]);
        }
        change_cash = (change_cash - parseInt(change_cash / values[x]) * values[x]).toFixed(2);
        x--;
    }
    return change;
}

console.log(checkCashRegister(3.94, 100, 
            [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
            ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
            ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
