import { test } from '@playwright/test';
import ClassFixture from '../utils/ClassFixture';

test("Product Listing Page Features", async ({ page }) => {
  const classFixture = new ClassFixture(page);
  const login1 = await classFixture.createLoginInstance();
  const dashboard = await classFixture.createDashboardInstance();
  const mainHeader = await classFixture.createMainNavigationHeaderInstance();
  const searchPage = await classFixture.createSearchPageInstance();

  await login1.navigateToPage('my-account/');
  await login1.fillLoginDetails();
  await dashboard.navigateToDashboard();
  await mainHeader.navigateToSearch("cool");
  await searchPage.searchResults();
  await searchPage.lookForProduct("VARDHMAN BREEZE BAMBOO COTTON YARN");

});