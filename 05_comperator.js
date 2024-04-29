// console.log(5<1)//false
// console.log(5>1)//true
// console.log(5==1)//false
// console.log(5!=1)//true

// console.log("5">1)//true
// console.log("005">1)//true
// console.log("Vipul">1)//false

console.log(null ==0)//false
console.log(null < 0)//false
console.log(null > 0 )//false
console.log(null >= 0 )//true
console.log(null <= 0 )//true
/*  the reason is that an equality check == and
comparisons < ,>,<=,>= work differently.
Comparisons convert null to a number, treat in it as 0.
That's why null >=0 and null <= 0 is true 
and null >,==,< 0 is false 
*/

// console.log(null >= 1)//false
// console.log(null == 1)//false
console.log()

console.log(undefined == 0)//false
console.log(undefined > 0)//false
console.log(undefined <= 0)//false

//=== (strict check)

console.log(5===5)//true
/* this will check value and
 data type is same or not */
console.log(5===55)//false
console.log(5==="5")//false
console.log(5==="Vipul")//false


