// Day 1

// q ==> 1
const addition = (a,b)=>{
    console.log(parseInt(a) + parseInt(b));
}
    addition(3, 2) //➞ 5
    addition(-3, -6) //➞ -9
    addition(7, 3)// ➞ 10
    addition('7', '3')// ➞ 10
    addition('7', 3) //➞ 10


// q==> 2
function convert(min){
    console.log(min*60);
}

convert(5) //➞ 300
  convert(3) //➞ 180
  convert(2) //➞ 120
  convert('2') //➞ 120


// q ==> 3
function addition(num){
    console.log(parseInt(num) + 1);
}
  addition(0) //➞ 1
  addition('9') //➞ 10
  addition('-3') //➞ -2


// q=> 4
function giveMeSomething(str){
    console.log(`something ${str}`);
}

    giveMeSomething("is better than nothing") //➞ "something is better than nothing"
    giveMeSomething("Bob Jane") //➞ "something Bob Jane"
    giveMeSomething("something")// ➞ "something something"


// q=>5
function triArea(height,base){
    console.log(0.5*height*base);
}
   triArea(3, 2)// ➞ 3
  triArea(7, 4) //➞ 14
  triArea(10, 10) //➞ 50

// q=>6
function howManySeconds(min){
    console.log(min *3600);
}
  howManySeconds(2)// ➞ 7200
  howManySeconds(10) //➞ 36000
  howManySeconds(24) //➞ 86400

// q=>7

function getFirstValue(arr){
    console.log(arr[0]);
}
    getFirstValue([1, 2, 3])// ➞ 1
    getFirstValue([80, 5, 100]) //➞ 80
    getFirstValue([-500, 0, 50])// ➞ -500

// q=> 8
function nextEdge(a,b){
    console.log(a+b-1);
}
    nextEdge(8, 10)// ➞ 17
    nextEdge(5, 7)// ➞ 11
    nextEdge(9, 2) //➞ 10

// q=> 9

function findPerimeter(length,width){
    console.log(2*(length+width));
}
  findPerimeter(6, 7)// ➞ 26
  findPerimeter(20, 10)// ➞ 60
  findPerimeter(2, 9)// ➞ 22

// q=>10
// Return the Remainder from Two Numbers
//   There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(a,b){
    console.log(a % b);
}
  remainder(1, 3) //➞ 1
  remainder(3, 4) //➞ 3
  remainder(-9, 45) //➞ -9
  remainder(5, 5) //➞ 0
