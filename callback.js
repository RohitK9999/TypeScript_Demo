//function test(scenario: any, verify: () => void)
function test(scenario, verify) {
    console.log("Running test scenario:  ".concat(scenario));
    verify();
}
function verify() {
    console.log("Welcome page displayed correctly.");
}
// test("Login Page", verify);
test("Login page", function () {
    console.log("Executing Login pages.....");
});
