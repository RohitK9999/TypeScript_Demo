export{}

let x: number = 10
console.log(x)

const y:string = "name"
console.log(y)

let z: number|boolean
z=101
z=false
console.log(z)

let a: unknown
a =100

let arr: string[] = ["true", "false"]

console.log(arr[0])

let user: { name: string; readonly age: number } = {
 name: "John",
 age: 25, 
}

user = {name: "ram", age: 30}

console.log('Age is:' +user.age)
console.log('name is:'+user.name)





