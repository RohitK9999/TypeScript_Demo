function sub(a: number,b: number){
    return a-b;
}

let concat = function (a: string, b: string): string {
    return a+b;
}

const greet = function (name: string): string{
    return `Hello ${name}`;
}

let multiply = (x: number, y: number): number => x*y; //Arrow function


//let subtract = sub(15,3);
const subtract = sub(15,3);
console.log(`The subtraction of two numbers is: ${subtract}`);
console.log(`The concatnation of two string are: ${concat("Roh","it")}`);
console.log(greet("Master"));
console.log(`The multiplication of two numbers are: ${multiply(2,3)}`);

