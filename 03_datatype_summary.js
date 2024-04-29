 
/* Data type devided into Two type -> On the Basis of 
Storing and Accessing from memory

 * First => Premitive
 // 7 types : 1->  String 
   2-> Number
   3-> Boolean
   4-> null
   5-> Undefined
   6-> Symbol
   7-> BigInt
   */
   const score =200
   const scoreValue = 200.03043
   const isLoggedIn = true

   const outsideTemp = null
   let username

   const id = Symbol('555')
   const anotherId = Symbol('555')
   console.log(typeof id) // symbol
   console.log(id);
   console.log(id === anotherId)//false

   const bigNumber = 53343255555343555534555n
   console.log(typeof bigNumber);//bigint

   console.log( bigNumber);//5334325555534355e+22



/*
* Second => NoN Premitive ( Reference)
// types :
1->Array
2->Objects
3->Functions
 */

const heros =['jonny depp',"ronaldo","nemar junior","vin dissel"]
 console.log(heros);
 console.log(typeof heros);// object
 


/* Is javascript static or dynamicaly typed langauge?

// Ans => Dynamicaly typed langauge

In dynamically typed languages, like JavaScript, 
the type of a variable is set dynamically during code execution.
 For example:
let a = "abc"; // 'a' is a string
a = 10; // 'a' becomes a number

In JavaScript, 
you can assign values to variables without specifying their type. 
The type is determined based on the assigned value. 
This dynamic behavior allows flexibility 
but can also lead to potential errors.


JavaScript’s Dynamism:

JavaScript is considered dynamic because:
Variables: All variables are dynamic in type and existence.
 You can create new variables at runtime.

Code: Even the code itself is dynamic.
 You can modify it during execution.

While this dynamism simplifies variable assignment,
 it can also introduce errors. For instance, 
 if you define a variable to hold numbers 
 and later accidentally change its value to null or a string, 
 it could lead to unexpected behavior.
 
 */

//---------======+++++++++////////////

// Stack( Primitive)
// Heap (Non - Primitive)

// provide copy of value(call by value)
// here stack memory allocation work
let Myname = "Vipul"
let anothername = Myname
 anothername = "Ram"
 console.log(Myname);//Vipul
 console.log(anothername);//Ram

// provide reference (call by reference)
// here heap memory allocation work

 let UserOne = {
     name : "Vipul",
     email: "Vipulabc@google.com"
 }
 let userTwo = UserOne
 userTwo.email = "vip_product@google.com"

 console.log(UserOne.email);//vip_product@google.com
 console.log(userTwo.email);//vip_product@google.com
