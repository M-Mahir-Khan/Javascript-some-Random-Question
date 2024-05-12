// day 4
// 31 ==> Movie Theatre Admittance
//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.

function acceptIntoMovie(age,isSupervised){
    return age >= 15 || isSupervised;
}
console.log(acceptIntoMovie(14, true))// true
console.log(acceptIntoMovie(14, false))//false
console.log(acceptIntoMovie(16, false))//true


// 32 ==> Evaluate an Equation
// Create a function that evaluates an equation.
function eq(equation){
    return equation.eval()
}
console.log(eq("1+2"))
console.log(eq("6/(9-7)"))
console.log(eq("3+2-4"))

// 33 ==> Concatenate First and Last Name into One String
// //     Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(str1,str2){
    return str1.concat(str2)
}

console.log(concatName("First ", "Last"))//First Last
console.log(concatName("John ", "Doe"))//John Doe
console.log(concatName("Mary ", "Jane"))//Mary Jane

// 34 ==> On/Off Switches
// // Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).

function posCom(num){
    return Math.pow(2,num)
}
console.log(posCom(1));//➞ 2
console.log(posCom(3));//➞ 8
console.log(posCom(10));//➞ 1024

// Triangle and Parallelogram Area Finder
// //     Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
function areaShape(base,height,shape){
     if(shape === "triangle"){
        return 0.5*base*height;
    }else if(shape === "parallelogram"){
        return base * height;
    }else{
        return "InvalidShape";
    }
}

console.log(areaShape(2, 3, "triangle")) // 3
console.log(areaShape(8, 6, "parallelogram")) // 48
console.log(areaShape(2.9, 1.3, "parallelogram"))//3.77


// 36 ==> Reverse an Array
// //     Write a function to reverse an array.

function reverse(arr){
    return arr.reverse()
}

console.log(reverse([1, 2, 3, 4])) //  [4, 3, 2, 1]
console.log(reverse([9, 9, 2, 3, 4])) //  [4, 3, 2, 9, 9]

// 37==>
//  S6: Destructuring Arrays I
//     You can assign variables from arrays like this:
//         const arr = [1, 2, 3, 4, 5, 6]
//         let a = arr[0]
//         let b = arr[1]
//         console.log(a) // outputs 1
//         console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax
function es6(arr){
    const [a,b] = arr;
    console.log(a); //  outputs 1
    console.log(b); //  outputs 2
}

es6([1, 2, 3, 4, 5, 6])

// 38 ==> Using Ternary Operators
// //     Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
function yeah_nope(condition){
    return condition ? "yeah" : "nope";
}

console.log(yeah_nope(true)) // yeah
console.log(yeah_nope(false)) // nope

// 39 ==> Convert an Array to a String
//  Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr){
    return arr.toString()
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]))// 1,2,3,4,5,6   
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]))
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]))

const string = arrayToString([1, 2, 3, 4, 5, 6])
console.log(typeof string);

// 40 ==> Return the Last Element in an Array
// //     Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
    return arr.pop()
}
console.log(getLastItem([1, 2, 3]))
console.log(getLastItem(["cat", "dog", "duck"]))
console.log(getLastItem([true, false, true]))