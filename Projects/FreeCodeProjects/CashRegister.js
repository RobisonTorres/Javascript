console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function checkCashRegister(price, cash, cid) {

    /* Task - Design a cash register drawer function checkCashRegister() 
    that accepts purchase price as the first argument (price), payment as 
    the second argument (cash), and cash-in-drawer (cid) as the third argument.*/
    let change = [];
    let x = 8;  // current units
    let values = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];  // current values
    let change_cash = (cash - price).toFixed(2);
    
    while (x >= 0 && change_cash >= 0) {

        if (change_cash % cid[x][1] < change_cash){
            change.push([cid[x][0], cid[x][1]]);
            change_cash = (change_cash - cid[x][1]).toFixed(2);
            
        } else if (change_cash % cid[x][1] == change_cash && (change_cash/ values[x]) >= 1 ){
            change.push([cid[x][0], parseInt(change_cash / values[x]) * values[x]]);
            change_cash = (change_cash - parseInt(change_cash / values[x]) * values[x]).toFixed(2);
        }
        x--;
    }
    let cid_sum = cid.reduce((p, c) => p + c[1], 0);
    let change_sum = change.reduce((p, c) => p + c[1], 0);

    if (cid_sum > change_sum && change_cash == 0) {
        return {status: "OPEN", change: change};
    } else if (cid_sum == change_sum && change_cash == 0) {
        return {status: "CLOSED", change: cid};
    } else {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
}

console.log(checkCashRegister(3.26, 100, 
                            [["PENNY", 1.01], ["NICKEL", 2.05], 
                            ["DIME", 3.1], ["QUARTER", 4.25], 
                            ["ONE", 90], ["FIVE", 55], ["TEN", 20], 
                            ["TWENTY", 60], ["ONE HUNDRED", 100]]))

/* Outputs - {

    status: 'OPEN', change: [
    [ 'TWENTY', 60 ], [ 'TEN', 20 ], [ 'FIVE', 15 ], 
    [ 'ONE', 1 ], [ 'QUARTER', 0.5 ], [ 'DIME', 0.2 ],
    [ 'PENNY', 0.04 ]]

}*/                    

/* Project description:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
*/
