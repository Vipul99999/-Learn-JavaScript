// string declaration
const name = "Vpul"
const roll_No=12345
console.log(name + roll_No +"value") // don't use this type

console.log('hello my name is ${name} and my roll no is ${roll_No}');
//follow above syntax 

// another string declaration method

const gameName = new String('footbal')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName._proto);//undefined
console.log(gameName.length);//7
console.log(gameName.toUpperCase());//FOOTBAL
console.log(gameName);//footbal // no change in original data

console.log(gameName.charAt(4));//b
console.log(gameName.indexOf('t'));//3

const name2 = "vishwanath"
const newname = name2.substring(0,5)
console.log(newname);//vishw

const name3 = name2.slice(-8,8)
console.log(name3);//shwana

const string4="  vipul  "
console.log(string4);// '  vipul  '
console.log(string4.trim());// 'vipul'

const url="https//vipul.com/vipul%245vip"
console.log(url.replace('%','#456'))//ttps//vipul.com/vipul#456245vip
console.log(url.includes('%55#456'))//false because not match
console.log(url.includes('vipul'))//true

const string5 = "Vipul is unstopable today "
console.log(string5.split(" "));
//output =>[ 'Vipul', 'is', 'unstopable', 'today', '' ]

