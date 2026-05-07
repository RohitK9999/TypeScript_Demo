export {}

let x = "SriRam";
console.log(x);

let a: number = 10;
console.log(a);

let b: String = "Allen";
console.log(b);

var y: number = 20;
var y=25; //It can redeclare another value to same variable for global(var) variable
console.log(y);

let z: number = 30;
// let z=40; it cannot redeclare another value to same variable for local(let) variable, it occurs error message
console.log(z);

let c: any = 40; //Here c variable having any type means any datatype (either number or string etc...)
//c = "Rama";
console.log(typeof c);  

let id: number | String;
id = 50;
id = "Sri Ganesh";
console.log(id);

let msg = `This message: ${id}`;
console.log(msg);

let name = "PlayWright";
name = "TypeScript";
name = "Puppeteer";
console.log(name);

let n: null = null;
console.log(n);

let u: undefined = undefined;
console.log(u);

const s: number = 16;
// s = 17; it cannot reinitialize a value to the variable






