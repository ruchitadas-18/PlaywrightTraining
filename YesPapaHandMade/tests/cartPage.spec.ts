import {test, expect} from "../utils/objectFixture";
import UserInput from "../utils/UserInput.json";
import Login from "../pages/login";

test("Cart Page to Stock Availability", async ({ login, dashboard, mainNavigationHeader,cart }) => {
    await login.navigateToPage(UserInput.urls.myAccount);
    const user = Login.getUserById(UserInput.login['second user']);
    await login.fillLoginDetails(user);
    await dashboard.navigateToDashboard();
    await mainNavigationHeader.navigateToCart();
    await cart.verifyPage();
    await cart.productEqualToStock();
    
});

test("Empty Cart Page", async ({ login, dashboard, mainNavigationHeader,cart }) => {
    await login.navigateToPage(UserInput.urls.myAccount);
    const user = Login.getUserById(UserInput.login['second user']); 
    await login.fillLoginDetails(user);
    await dashboard.navigateToDashboard();
});