function sub(a, b) {
    return a - b;
}
function add(a, b) {
    return a + b;
}
function greet(name) {
    return "Hello ".concat(name);
}
var subtract = sub(15, 3);
var concat = add("Roh", "it");
console.log("The subtraction of two numbers is: ".concat(subtract));
console.log("The concatnation of two string are: ".concat(concat));
console.log(greet("Master"));
