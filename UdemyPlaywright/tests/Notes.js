/*
playwright.config
------------------ define Configuration function ------------------------
testDir: './tests' ---> redirect to test files folder
timeout: 30 sec - defaults 
overwrite timeout : 40 *1000
//asssertion level timrouts -> expect timeout -? expect {timeout = 40*1000}
reporter: html
use:{
browser Name: 'chromium'
headless : 'true'
screenshot: 'on
trace: 'on'
}
projects: [
{collection of test cases to run in different browsers}
name: 'chromium',   
use: {browserName: 'chromium'}
},
{
name: 'firefox',                                                                       
use: {browserName: 'firefox'}
device: 'iPhone 12' -> to run in mobile simulator
},
]

//viewport -> mobile simulator
use: {
viewport: {width: 1280, height: 720}
ignoreHTTPSErrors: true -> to ignore the https errors
permissions: ['geolocation'] -> to give permissions to the browser
video: 'on' -> to record the video of the test execution
}

config = {
testDir: './tests',
retries:`2, // to retry the failed test cases 2 times
timeout: 30 * 1000,
reporter: 'html',}

to run only 1 file-> pass the file name in the terminal
npx playwright test tests\<file name>

Await -> required only when an action is taking 

Usages of Expects:
1. Validate the outcome
2. Fails the test if the condition is not met
3. auto-waits 
4. give clear error messages

//blocking the network
not loading css
page.route("**"/"*.css".route =>route.abort())

block the images
page.route("**"/"*.{jpg, jpge, png}".route =>route.abort())

register all the network calls
page.on('request',request => request.url());
page.on('response',response => response.url(), response.statuscall());


*/