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
}

*/