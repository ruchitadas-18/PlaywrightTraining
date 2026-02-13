class ApiUtils{
    constructor(apiContext, loginPayload){
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }
    async getToken(){
        const response = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data: this.loginPayload,
        });
        //expect(response.ok()).toBeTruthy();
        //return json file
        const jsaon = await response.json();
        const token = jsaon.token;
        return token;
    }

    async createOrder(OrderPayload){
        
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
                data:OrderPayload,
                headers: {
                    'Authorization': response.token,
                    'Content-Type': 'application/json'
                },
            })
            const orderResponseJson = await orderResponse.json();
            //orderId = orderResponseJson.orderId;
            //expect(orderResponseJson.orderId).toBeTruthy();
            console.log(orderResponseJson);
            const orderId = orderResponseJson.orders[0];
            response.orderId = orderId;
            return response;
    }
}

module.exports = {ApiUtils};