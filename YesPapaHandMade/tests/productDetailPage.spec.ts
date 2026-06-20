import { test } from '../utils/objectFixture';
import Login from '../pages/login'
import UserInput from '../utils/UserInput.json';

test("@PLP Product Listing Page Features", async ({ login, dashboard, mainNavigationHeader, searchPage, productDetailPage, cart }) => {

  await login.navigateToPage(UserInput.urls.myAccount);
  const user = Login.getUserById(UserInput.login['second user']);
  await login.fillLoginDetails(user);
  await dashboard.navigateToDashboard();
  await mainNavigationHeader.navigateToSearch(UserInput.search.searchTerm1);
  await searchPage.searchResults();
  await searchPage.lookForProduct("VARDHMAN COOL KNIT");
  await productDetailPage.selectProduct();
  //await productDetailPage.addQuantity(5);
  await productDetailPage.clickAddToCart();
  await productDetailPage.viewCart();
  await cart.verifyPage();
  await cart.verifyProductInCart("VARDHMAN COOL KNIT");
  await cart.verifyTheTotal();
  await cart.verifytheTotalInCheckout();
  await cart.navigateToCheckout();


});