let score = "vipul"
console.log(typeof score)//string
console.log(typeof (score))//string

let value = Number(score)
console.log(typeof (value))//number
console.log(value)//output=> NaN

//33=> 33
// "vipul" => NaN
//null => 0
// false => 0
//true => 1
// undefined => NaN

let isloggedin = ""

let booleanisloggedin = Boolean(isloggedin)


console.log(typeof booleanisloggedin)// boolean
console.log(typeof isloggedin)//stirng
 
console.log(isloggedin) // output => nothing
console.log(booleanisloggedin)// output => false

// empty string => false
// string => true
// null => typeof => object
// bool form of null conversion => false

//1=>true // 0=> false
//"" => false
//" vipul" => true

console.log()
let number = 55555
let stringNumber = String(number)

console.log(typeof number)//number
console.log(typeof stringNumber) // string

console.log(stringNumber)//55555

/*  conversion into string is data type alway undefined
founed.
example - number => string but output gives number

  null=> string but output => null

*/
console.log(+true)// output=> 1
//console.log(true+)// output=> error

 let num1,num2,num3

num1=num2 =num3 =2+3 // don't write as it is

let gameCounter =100

gameCounter++  // postfix
console.log(gameCounter)//101

++gameCounter  // prefix
console.log(gameCounter)//102





