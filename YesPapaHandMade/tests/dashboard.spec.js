import { test } from '@playwright/test';
import ClassFixture from '../utils/ClassFixture';

test("Dashboard Features", async ({ page }) => {
  const classFixture = new ClassFixture(page);
  const dashboard = await classFixture.createDashboardInstance();   
});