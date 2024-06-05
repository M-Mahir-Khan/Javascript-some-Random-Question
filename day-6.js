// day6
// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.
function hasSpaces(str){
    return str.includes(" ")
}
// console.log(hasSpaces("hello"))
// console.log(hasSpaces("hello, world"))
// console.log(hasSpaces(" "))
// console.log(hasSpaces(""))
// console.log(hasSpaces(",./!@#"))


// 52 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

function returnFromContainer(str) {
    const newStr = str.trim().toLowerCase();
  const container = {
    bread: "bag",
    beer: "bottle",
    canday: "plastic",
    cheese: null,
  };
//   dot annotation -> obj.
//   bracket annotation -> obj[]
//   return container[newStr];
}
//     getContainer("Bread") ➞ "bag"
//     getContainer("Beer") ➞ "bottle"
//     getContainer("Candy") ➞ "plastic"
//     getContainer("Cheese") ➞ null


// 53 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.
function numberArgs(){
    console.log(arguments.length);
}
    // numberArgs("a", "b", "c") //➞ 3
    // numberArgs(10, 20, 30, 40, 50) //➞ 5
    // numberArgs("x", "y")// ➞ 2
    // numberArgs() //➞ 0
// 54 ==>  Extract City Facts
//     Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//         name
//         population
//         continent
//         The string should have the following format: 
//     "X has a population of Y and is situated in Z" 
//     (where X is the city name, Y is the population and Z is the continent the city is situated in).
//         cityFacts({
//             name: "Paris",
//             population: "2,140,526",
//             continent: "Europe"
//         }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//         cityFacts({
//             name: "Tokyo",
//             population: "13,929,286",
//             continent: "Asia"
//         }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
//         cityFacts({
//             name: "Tokyo",
//             population: "13,929,286"
//         }) ➞ "Tokyo has a population of 13,929,286"
// 55 ==> Volume of a Box
//     Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
function volumeOfBox(sizes){
    const {width,length,height} = sizes
    return width*length*height
}

//         console.log(volumeOfBox({ width: 2, length: 5, height: 1 })) //➞ 10
//         console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))//➞ 16
//         console.log(volumeOfBox({ width: 2, length: 3, height: 5 })) //➞ 30
//     Volume is length * width * height.
// 56 ==> Stuttering Function
//     Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
function stutter(word){
    return`${word.slice(0,2)}... ${word.slice(0,2)}... ${word}?`
}
//         console.log(stutter("incredible")) //➞ "in... in... incredible?"
//         console.log(stutter("enthusiastic")) //➞ "en... en... enthusiastic?"
//         console.log(stutter("outstanding")) //➞ "ou... ou... outstanding?"
// 57 ==> Is the Word Singular or Plural?
//     Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function isPlural(word){
    return word.endsWith("s")
}
//         console.log(isPlural("changes"))// ➞ true
//         console.log(isPlural("change")) //➞ false
//         console.log(isPlural("dudes")) //➞ true
//         console.log(isPlural("magic")) //➞ false
//         This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

// 58 ==> Four Passengers and a Driver
//     A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

function carsNeeded(people){
    return Math.ceil(people / 5)
}
//         console.log(carsNeeded(5)) //➞ 1
//         console.log(carsNeeded(11)) //➞ 3
//         console.log(carsNeeded(0)) //➞ 0
// 59 ==> ES6: Destructuring Arrays IV
//     There is an easy way to assign to array values to the nth index by using the Rest element.
            var [head, tail] = [1, 2, 3, 4]
        console.log(head) // outputs 1
        console.log(tail) // outputs 2
//     But how could I make tail = [2, 3, 4] instead of tail = 2?
// 60 ==> ES6: Destructuring Arrays III
    // You can assign variables from arrays with destructuring like this:
    //     const arr = ["eyes", "nose", "lips", "ears"]
    //     let [eyes, nose, lips, ears] = arr
    // But you can also skip over items in the array being destructured. (takeout only lips)

    const arr = ["eyes", "nose", "lips", "ears"]
        let [eyes, nose, , ears] = arr