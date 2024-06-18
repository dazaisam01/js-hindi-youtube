let score = "33"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)

let val = "33abc"
let val2 = Number(val)
console.log(typeof val2)//it will show number
//but
console.log(val2);//NaN (not a number) type

// "33" => 33
// "33abc" => NaN
// "true" => 1
// "null" => 0
// "undefined" => NaN
// "Samarth" => NaN

//for boolean
let isLoggedIn = 1
let b=Boolean(isLoggedIn)
console.log(b);

//1 => ture 0 =>false
//"" => false (empty string)
//" Samarth" => true

//for string
let stringNumber = 33
let value = String(stringNumber)
console.log(value);
console.log(typeof (value));