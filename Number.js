//Number is a primitive data type used to perform mathematical operations//

const score=400;
console.log(score);

const balance= new Number(4000);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber=123.09;
console.log(otherNumber.toPrecision(3));

const hundred= 1000000;
console.log(hundred.toLocaleString('en-IN'));
console.log(hundred.toLocaleString('en-US'));