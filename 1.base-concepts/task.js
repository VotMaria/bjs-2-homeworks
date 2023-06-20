"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let d = b**2 - 4*a*c;
  let x;
  let y;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
   x = -b/(2*a);
   arr.push(x);
  } else if (d > 0) {
    x = (-b + Math.sqrt(d) )/(2*a);
    y = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x, y);
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 
let P = (percent/100/12);
let S = (amount - contribution);
let n = (countMonths);
let payment = S * (P + (P / (((1 + P)**n) - 1)));
let totalPayment = Number((payment*n).toFixed(2));

return totalPayment;

}