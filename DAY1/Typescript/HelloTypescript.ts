// var s = "Hello Typescript !"; // type inferencing
// s = 100;

var s: string = "Hello Typescript !"; // type annotation
console.log(s);

var n: number;
var b: boolean;

var x: any;
x = 100;
x = "Bye !";
x = [10, 20];
x = { name: "IDEAS", city: "Pune" };

// functions
function Add(x: number, y: number): number | string {
  if (x < 0) {
    return "x should be greater than zero !";
  }
  return x + y;
}

var result: number | string = Add(10, 20);

// Optional Parameters

// function PrintBook(author: string, title: string, numOfPages?: number) {
//   console.log(author, title, numOfPages);
// }

// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");

/// Default Parameters

function PrintBook(
  author: string = "Unknown",
  title: string = "Unknown",
  numOfPages: number = 0,
) {
  console.log(author, title, numOfPages);
}

PrintBook(undefined, "XYZ", 200);

let y: number = 100;
// 100 line
// let y = 200;

// const PI: number = 3.15;
// PI = 3.1454; // Error

// const PI: number; // Error - define
// PI = 3.15; // Error

const company = { name: "IDEAS", city: "Pune" };
company.city = "Bengaluru";
console.log(company);

// Arrow Functions

// var Square = function (x) {
//   return x * x;
// };

// OR

// var Square = x => {
//   return x * x;
// };

// OR

var Square = x => x * x;
console.log(Square(10));
