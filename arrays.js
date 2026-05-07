var array1 = [10, 20, 30]; //Declare and intializing the array
var array2 = ["Alice", "Bob", "John"]; //Another way of declare & initializing the array using generic type
console.log("First array:", array1);
console.log("Second array:", array2);
var array3 = [true]; //Readonly array
console.log("Third array:", array3);
array1.push(40);
array2.pop();
console.log("First array:", array1);
console.log("Second array", array2);
var mixed = [101, true, "John", 123456];
console.log("Fourth mixed type array4:", mixed);
var array4 = [111, 112, 113];
console.log("Fifth array:", array4);
var array5 = new Set();
array5.add("Amar");
array5.add("Akbar");
array5.add("Antony");
array5.add("Amar");
console.log("Set of elements are:", array5);
