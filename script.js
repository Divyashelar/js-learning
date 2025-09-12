// there are three type of variable in js var ,let ,const.

console.log("hey ")//   to print something on the console window.


var a = 8;// var value can be changed.global scope
var b = true;
var c = "divya"

console.log(a)

console.log(typeof a,typeof b,typeof c)// typeof is used to check the variable type
   
let n = 5;// block scope
n = n + 2
console.log(n)
{
   let n = 22;
   console.log(n)
}
const a1 = 6;// const cannot be changed.
//a1= a1 + 1
console.log(a1)
// primative data type
let num = 5 ;            //  1. number 
let name = "divya";      // 2. string.
let a3 = null             // 3. null.
let value = true         // 4. bollen -true or false.
let name2 = undefined       // 5. Undefine
let big_num = 45245556554   //6 big int.
console.log(num,name,a3,value,name2,big_num)
console.log(typeof num,typeof name,typeof a3,typeof value,typeof name2,typeof big_num)