import {test} from '../utils/objectFixture';
import UserInput from '../utils/UserInput.json';
import Login from '../pages/login'
const users = Login.users;

test('Dashboard Page Features', async ({ login, dashboard }) => {
    await login.navigateToPage(UserInput.urls.myAccount);
    const user = Login.getUserById(UserInput.login['second user']);
    await login.fillLoginDetails(user);
    await dashboard.navigateToDashboard();
    await dashboard.addToCart(UserInput.products.product4);
});