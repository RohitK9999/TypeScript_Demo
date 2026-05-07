//function test(scenario: any, verify: () => void)
function test(scenario: any, verify: any){ //callback function declaration
    console.log(`Running test scenario:  ${scenario}`);
    verify();
}

function verify()
{
    console.log("Welcome page displayed correctly.");
}

// test("Login Page", verify);

test("Login page", () => {
     console.log("Executing Login pages....."); //either using above function verify() or this onets
});