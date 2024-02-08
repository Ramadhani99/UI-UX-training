// spread operator(...) -arrays
// rest parameter ...  function
// ()=> {}  arraow function
// var , let ,const
//array destructuring, object destructuring

var arr = ["reactjs", "nodejs"];

// destructuring assignment
var [f1, f2] = arr;

console.log(f1);
console.log(f2);
console.log(f1.length);

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// destructuring assignment
var [color1, color2, color3] = colors;

console.log(color1); // Violet
console.log(color2); // Indigo
console.log(color3); // Blue

var [a, b, ...args] = colors;
console.log(a);
console.log(b);
console.log(args);

var x = 100,
  y = 200;
[x, y] = [y, x];
console.log(x);
console.log(y);

function array() {
  return ["html", "css", "javascript"];
}

var [x, y, z] = array();

console.log(x); // 100
console.log(y); // 200
console.log(z); // 300
