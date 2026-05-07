//console.log("This is a synchronous log");

//setTimeout(() => {
  //  await console.log("This is an a synchronous log");
//}, 10);

//console.log("This is another synchronous");
//console.log("=================================================================================");


async function main(){
    await console.log("Starting main function");
    await helper();
    await console.log("Main function complete");
}

function helper(){
    console.log("Helper function executing.....");
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log("Helper function executed after 2 seconds");
            resolve();
        }, 2000)
    });
}

main();