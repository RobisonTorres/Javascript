console.log("JavaScript Algorithms and Data Structures - Projects.")
console.log()

function convertToRoman(num) {

    /* This function takes a positive integer (1 - 3999) as its parameter and returns
    a string containing the Roman Numeral representation of that integer.*/
    var roman_numbers = {
        1000: 'M', 2000: 'MM', 3000: 'MMM',  
        100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC',
        700: 'DCC', 800: 'DCCC', 900: 'CM', 
        10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX',
        70: 'LXX', 80: 'LXXX', 90: 'XC', 
        1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI',
        7: 'VII', 8: 'VIII', 9: 'IX'
    }
    let n = String(num).split('')
    let r_num = ''
    for (let i = 0; i < n.length; i++){
        let a = n.slice(i+1, n.length)
        if (n[i] == '0') {
            continue;
        } else {
            r_num += roman_numbers[n[i] + '0'.repeat(a.length)]
        }
    }
    return r_num
}
  
console.log(convertToRoman(3306))  // Outputs - MMMCCCVI

/* Project description:
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
*/
