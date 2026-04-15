import { test } from '@playwright/test';
import ClassFixture from '../utils/ClassFixture';

test("Product Listing Page Features", async ({ page }) => {
  const classFixture = new ClassFixture(page);
  const login1 = await classFixture.createLoginInstance();
  const dashboard = await classFixture.createDashboardInstance();
  const mainHeader = await classFixture.createMainNavigationHeaderInstance();
  const searchPage = await classFixture.createSearchPageInstance();
  const productDetailPage = await classFixture.createProductDetailPageInstance();

  await login1.navigateToPage('my-account/');
  await login1.fillLoginDetails();
  await dashboard.navigateToDashboard();
  await mainHeader.navigateToSearch("cool");
  await searchPage.searchResults();
  await searchPage.lookForProduct("VARDHMAN COOL KNIT");
  await productDetailPage.selectProduct();
  //await productDetailPage.addQuantity(5);
  await productDetailPage.clickAddToCart();
  await productDetailPage.viewCart();

});