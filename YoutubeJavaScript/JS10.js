//Untill the callback is executed, our source is empty
// So where it is stored?

//10 different servers to get allb the callbacks
// Event Queue - all the callbacks are stored here
// Event Loop - checks if the call stack is empty, then pushes the first callback from event queue to call stack

// Problem with callback functions 
// Callback Hell - multiple nested callbacks making code hard to read and maintain
//Pyramid of Doom
/*
asyncOoeration(arg1, (result1) => {
    asyncOperation2(result1, (result2) => {
        asyncOperation3(result2, (result3) => {
            asyncOperation4(result3, (result4) => {
                // and so on...
            });
        });
    });
});
*/
// Solution - Promises and Async/Await
//Promise - object - eventually produces a value or an error

// States of Promise
// Pending - initial state, neither fulfilled nor rejected
// Fulfilled - operation completed successfully
// Rejected - operation failed

// Creating a Promise
function getData() {
    return new Promise((resolve, reject) => {  // kind of like callback functions
        // Simulating an asynchronous operation using setTimeout
        setTimeout(() => {
            const success = true; // Change to false to simulate an error
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    }); 
}

getData()
    .then((data) => {
        console.log("Data received:", data);   
    })
    .catch((error) => {
        console.error("Error:", error);
    }
);
// .then() - handles fulfilled state
// .catch() - handles rejected state
// .finally() - executes code regardless of the promise outcome


// Better way to handle asynchronous code - Async/Await
async function fetchData() {
    try {
        const data = await getData(); // waits for the promise to resolve
        console.log("Data received using async/await:", data);
    } catch (error) {
        console.error("Error using async/await:", error);
    }   
}
