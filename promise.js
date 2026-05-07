var test1 = function () {
    return new Promise(function (resolve, reject) {
        resolve("Success");
    });
};
var test2 = function () {
    return new Promise(function (resolve, reject) {
        reject("Failed");
    });
};
test1().then(function (data) {
    console.log(data);
});
test2().catch(function (data) {
    console.log(data);
});
