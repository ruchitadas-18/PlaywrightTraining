const {test,expect, request} = require('@playwright/test')
const {ApiUtils} = require('./Utils/ApiUtils')
const payload = {userEmail: "gihiw10644@gxuzi.com", userPassword: "3hUh8rkg!8.Yxs$"};
const OrderPayload = {orders: [{country: "Equatorial Guinea", productOrderedId: "6964a1cbc941646b7a91786b"}]};
let response;

/*login API
test.beforeAll(async({request})=>{
    const response = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data:payload
    });
    expect(response.ok()).toBeTruthy();
    //return json file
    const jsaon = await response.json();
    token = jsaon.token;
    console.log(token);

    const orderResponse = await request.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
        data:OrderPayload,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
    const orderResponseJson = await orderResponse.json();
    //orderId = orderResponseJson.orderId;
    //expect(orderResponseJson.orderId).toBeTruthy();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];
    console.log(orderId);

});
*/

test.beforeAll(async({}) =>{
    const apiContext = await request.newContext();
    const apiUtil = new ApiUtils(apiContext,payload);
    apiUtil.createOrder(OrderPayload);
    response = await apiUtil.createOrder(OrderPayload);
})

test('Api Integration with Web', async ({page})=>{  
    //playwright executing javascript
    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    }, response.token);
    const emailName = "gihiw10644@gxuzi.com";
    const productName = page.locator(".card-body");
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator("button[routerlink*='myorders']").click();
    //for table
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderId = (await rows.nth(i).locator("th").textContent()).trim();

        if (rowOrderId === response.orderId) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

}); 