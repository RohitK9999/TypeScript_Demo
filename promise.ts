let test1 = () => {
    console.log("Registration Test");
    return new Promise((resolve, reject) => {
        resolve("Registration Success");
    })
}

let test2 = () => {
    return new Promise((resolve, reject) => {
        reject("Failed");
    })
}

let test3 = () => {
    console.log("Login Test");
    return new Promise((resolve, reject) => {
        resolve("Login Success");
    })
}

//test1().then((data) => {
  //  console.log(data);
//})

//test2().catch((data) => {
  //  console.log(data);
//})

test1().then(test3);

//test1();