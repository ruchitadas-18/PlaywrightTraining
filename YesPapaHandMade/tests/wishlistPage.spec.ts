import { test } from '@playwright/test';
import ClassFixture from '../utils/ClassFixture';

test("Product Listing Page Features", async ({ page }) => {
  const classFixture = new ClassFixture(page);
  const login1 = await classFixture.createLoginInstance();
  const dashboard = await classFixture.createDashboardInstance();
  const mainHeader = await classFixture.createMainNavigationHeaderInstance();
  const productListingPage = await classFixture.createProductListingPageInstance();
  
  await login1.navigateToPage('my-account/');
  await login1.fillLoginDetails();
  await dashboard.navigateToDashboard();
  await mainHeader.navigateToHandKnitted("Baby Sets");
  await productListingPage.changeCategory("Knitting Accessories & Crochets");
  //await productListingPage.applyPriceFilter(40, 100);
  await productListingPage.changeView('list');
  await productListingPage.selectingProduct("YES PAPA LABUBU DOLL The Monsters Big Energy Series Blind Box Cute Toy Decor Gift (Random Color – 1 Pc)");
  await productListingPage.addToWishList();
  await mainHeader.verifyWishListCount("2");
  await productListingPage.selectingProduct("Yes Papa Bag Handles");
  await productListingPage.addToWishList();
  await mainHeader.verifyWishListCount("3");

});