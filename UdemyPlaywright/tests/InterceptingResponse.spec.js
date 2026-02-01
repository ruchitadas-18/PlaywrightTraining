const {test,expect, request} = require('@playwright/test')
const {ApiUtils} = require('./Utils/ApiUtils')
const payload = {userEmail: "gihiw10644@gxuzi.com", userPassword: "3hUh8rkg!8.Yxs$"};
const OrderPayload = {orders: [{country: "Equatorial Guinea", productOrderedId: "6964a1cbc941646b7a91786b"}]};
const fakePayLoad = { data: [], message: "No Orders" };
let response;

test.beforeAll(async({}) =>{
    const apiContext = await request.newContext();
    const apiUtil = new ApiUtils(apiContext,payload);
    apiUtil.createOrder(OrderPayload);
    response = await apiUtil.createOrder(OrderPayload);
})

test('Api Integration with Web', async ({page})=>{  
    //playwright executing javascript
    page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    }, response.token);
    await page.goto('https://rahulshettyacademy.com/client');
    //reroute accordlingly
    //write before the actual call is made
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            //intercepting the response by giving a fake response
            const fakeResponse = await page.request.fetch(route.request());
            //converting js -> json so that system understand
            let body = JSON.stringify(fakePayLoad);
            route.fulfill({
                fakeResponse,
                body,
            })

        }
    )
    await page.locator("button[routerlink*='myorders']").click();
    await page.pause();
    //for table
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    //Mock Up for no order

    //Might get Request COntext Disposal
    //recieve message is taking time while fake data is passed
    //not giving error when we pause since it is wait
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent()); 

}); 

 