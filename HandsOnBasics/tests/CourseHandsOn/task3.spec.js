import { test, expect } from '@playwright/test';
const LoginPage = require('../../page/login');
const eventData = require('../../Utils/eventData.json');

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';

async function loginAndGoToEvents(page) {
  const loginPage = new LoginPage(page);
  await loginPage.navigate(`${BASE_URL}/login`);
  await loginPage.login();

  await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
  await page.goto(`${BASE_URL}/events`);
}

test('sandbox banner is shown when 6 events are returned', async ({ page }) => {
  await page.route('**/api/events**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(eventData.SIX_EVENTS_RESPONSE),
    });
  });

  await loginAndGoToEvents(page);

  const eventCards = page.getByTestId('event-card');
  await expect(eventCards).toHaveCount(6);

  const banner = page.getByText(/sandbox holds up to/i);
  await expect(banner).toBeVisible();
  await expect(banner).toHaveText(/9 bookings/i);
});

// ── Test 2: 4 events → banner is NOT visible ──────────────────────────────────
test('sandbox banner is hidden when 4 events are returned', async ({ page }) => {
  await page.route('**/api/events**', async (route) => {
    await route.fulfill({
      status:      200,
      contentType: 'application/json',
      body:        JSON.stringify(eventData.FOUR_EVENTS_RESPONSE),
    });
  });

  await loginAndGoToEvents(page);

  // Wait for event cards to render
  const eventCards = page.getByTestId('event-card');
  await expect(eventCards.first()).toBeVisible();
  expect(await eventCards.count()).toBe(4);

  // Banner must NOT be present
  const banner = page.getByText(/sandbox holds up to/i);
  await expect(banner).not.toBeVisible();
});
