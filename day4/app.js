let message = "Hello, World! welcome to UIUX training ";
//named function disp
function disp() {
  console.log("display function");
}
//ananymous function
var show = function () {
  console.log("ananymous function");
};
//arrow function
let f = () => console.log("arraow function");
console.log("Welcome to NodeJS");

//array

var courses = ["node.js", "react"];
var newcourse = [...courses, "oracle", "mysql"];
console.log(message);
console.log(message.length);
console.log(message.toUpperCase());
disp();
show();
f();
console.log(courses);
console.log(newcourse);

//var global,redifined,reinitilize
//let local,reinitilize,define is not possible
//const fixed-cannot be modified

var age = 30;

var fun1 = () => {
  let score = 80;
  console.log(age);
};
fun1();
let name = Array.from("Sudaksha");
console.log(name);

//keys and value pair
var list = courses.entries();

console.log(...list);

//only keys
var k = courses.keys();
console.log(...k);

//only value
var v = courses.values();
console.log(...v);

//slice

console.log(newcourse.slice(1, 3));

//splice
console.log(newcourse.splice(0, 2, "Angular", "net core application"));

//String function
var my = "Ramadhani";
console.log(my.toUpperCase());
console.log(my.indexOf("R"));
console.log(my.charAt(5));

//
var dt = new Date();
console.log(dt.getDate());
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getMinutes());
console.log(dt.getHours());

//object creation
const user = {
  name: "Ramadhani",
  age: 29,
  rollno: "24",
};

console.log(user.name);
console.log(user.age);
console.log(user.rollno);

const { nam, ag, roll } = user;

console.log(">>>>>>>>>Object Destructer>>>>>>>>>>>>>");
console.log(nam);
console.log(ag);
console.log(roll);

//map new
var map = new Map();
map.set("Rama", "Developer");
map.set("Made", "Enterprenuer");
map.set("Khamisi", "Farmer");
map.set("Sadick", "DBA");

console.log(map.size);
console.log(map);

for (let k of map.keys()) {
  console.log(k);
}
for (let v of map.values()) {
  console.log(v);
}
