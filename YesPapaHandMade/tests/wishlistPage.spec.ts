import { test } from '../utils/objectFixture';
import UserInput from '../utils/UserInput.json';
import Login from '../pages/login';
let count = 3;

test("Product Listing Page Features", async ({ login, dashboard, mainNavigationHeader, productList }) => {
  await login.navigateToPage(UserInput.urls.myAccount);
  await login.fillLoginDetails(Login.getUserById(UserInput.login['first user']));
  await dashboard.navigateToDashboard();
  await mainNavigationHeader.navigateToHandKnitted(UserInput.category.category1);
  await productList.changeCategory(UserInput.category.category2);
  //await productList.applyPriceFilter(40, 100);
  await productList.changeView('list');
  await productList.selectingProduct(UserInput.products.product1);
  await productList.wishListProduct();
  await mainNavigationHeader.verifyWishListCount(count);
  await productList.selectingProduct(UserInput.products.product2);
  
});