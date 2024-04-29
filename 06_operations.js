let value = 3
let negValue  = -value
console.log(negValue)//-3

// console.log( 5+5)
// console.log( 5-5)
// console.log( 5*5)
// console.log( 5**5)
// console.log( 5/5)
// console.log( 5%6)

console.log() // gives new line

let str = "Vipul"
let str1 = " is Unstopable"
let str2 = str + str1
console.log(str2)
console.log()
console.log("5"+ 5)//55
console.log(true+ 5)//1+5 = 6
console.log(false+ 5)//0+5=5
console.log(5 + "2")//52

console.log(5 +3+ "2")//82
console.log(5 -1+ "2")//42
console.log(5 +3+ "vipul")//8vipul
console.log(5 +3+ "vipul"+2*3)//8vipul6
console.log(5 +3+("3"+2)*3)//8 + (32)*3 = 104
console.log()//newline

console.log("5" - 15)//-10
console.log(5 - "10")//-5
console.log(50 - "10")//40
console.log("5"-5)//0
console.log("334"+(5*5))//"334"+24 => 33425
console.log("Vipul"+5)//Vipul5
console.log("Vipul"+5 +(2**2)%2/2)//Vipul50
console.log(5%1) // 0
console.log(2**2*2+3- (55 - "vipul")+5*2%3)//NaN
console.log(2**2*2+3- (55 - "vipul"))//NaN
console.log((55 - "vipul")- 3*5+2)//NaN
console.log((55 + "vipul")- 3*5+2)//NaN
console.log((55 + "vipul")+ 3*5+2)//55vipul + 15+2 => 55vipul152
console.log("vipul" + 55555)/* output => vipul55555
/*  Because => concatination operation is done here
 /*  with string of alphabet plus(+)sign act as 
 concation operator.
 /* Negative (-) sign is not defined for do any operation
 with string of alphabet. S0,
 output => NaN found
 */
console.log("Vipul" - 55555)//NaN
console.log("Vipul%"+5)//vipul%5
console.log("Vipul*"+5)//vipul*5
console.log("Vipul+a+b=5"+5)//vipul+a+b=55
 console.log()
  //  alphanumeric operation
  
  console.log("Vipul5"-5)//NaN
  console.log(55+"9Vip555ul"+5)//559Vip555ul5
  console.log(5-"55Vipul")//NaN
  console.log(5+5+"555Vipul")//10+"555Vipul"=>10555Vipul
  console.log(5-"Vipul+5"+234)//NaN
  console.log(5-"55Vipul"-55)//NaN
  console.log(5+"2345Vipul"-555)//NaN
  console.log(5+"2345Vipul"*555)//NaN
  console.log(5+"2345Vipul"/555+(5*2))//NaN
  console.log()
  console.log(55-5*(2*2)+"2345Vipul"+555)//352345Vipul555
  console.log(55-5*(2*2)+"2345Vipul"+555-20)//NaN
  console.log(55-5*(2*2)+"2345Vipul"+555/5%5*50-20)//NaN
  /*  after string of alphanumeric any negative operator not defined 
  as like  =>55-5*(2*2)+"2345Vipul"+555-20
  */
  console.log(55-5*(2*2)+"2345Vipul"+555*(30-20))//35245Vipul5550
  console.log(55-5*(2*2)+"2345Vipul"+555*10)//35245Vipul5550

  