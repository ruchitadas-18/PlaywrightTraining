//Non - Blocking sleep function
//Async function that returns a promise that resolves after a specified time
// Callbacks can be used to execute code after the sleep duration


function fetchData(callback) {
    //Just like selenium waits
    setTimeout(() => {
        let data = "Data fetched";
        callback(data,null);
    }, 5000); // Simulate a 2 second delay
}

function handleData(data, error) { //callback function
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Success:", data);
    }       
}

fetchData(handleData); //Passing callback function
console.log("Fetching data... Please wait.");

