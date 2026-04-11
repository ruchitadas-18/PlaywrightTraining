import { test, expect,Page } from '@playwright/test';

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_URL  = 'https://api.eventhub.rahulshettyacademy.com/api';

const EDGE_USER = { email: 'daxawiy415@indevgo.com', password: '3hUh8rkg!8.Yxs$' };
const GMAIL_USER = { email: 'daerf48029@minitts.net', password: 'Learning@830$3mK2' };

async function loginAs(page: Page, user: { email: string, password: string }) {
  await page.goto(`${BASE_URL}/login`);
  await page.getByPlaceholder('you@email.com').fill(user.email);
  await page.getByLabel('Password').fill(user.password);
  await page.locator('#login-btn').click();
  await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
}

test('gmail user sees Access Denied when viewing edge user booking', async ({ page, request }) => {

  // ── Step 1: Login as E
  //  user via API and get token ─────────────────────
  const loginRes = await request.post(`${API_URL}/auth/login`, {
    data: { email: EDGE_USER.email, password: EDGE_USER.password },
  });
  expect(loginRes.ok()).toBeTruthy();
  const { token } = await loginRes.json();

  // ── Step 2: Fetch events via API to get a valid event ID ──────────────────
  const eventsRes = await request.get(`${API_URL}/events`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  expect(eventsRes.ok()).toBeTruthy();
  const eventsData = await eventsRes.json();
  const eventId = eventsData.data[0].id;

  // ── Step 3: Create a booking via API as Edge user ────────────────────────
  const bookingRes = await request.post(`${API_URL}/bookings`, {
    headers: { Authorization: `Bearer ${token}` },
    data: {
      eventId,
      customerName:  'Edge User',
      customerEmail: EDGE_USER.email,
      customerPhone: '9999999999',
      quantity:      1,
    },
  });
  expect(bookingRes.ok()).toBeTruthy();
  const edgeBookingId = (await bookingRes.json()).data.id;

  console.log(`Edge booking created via API. ID: ${edgeBookingId}`);

  // ── Step 4: Login as Gmail user via UI ────────────────────────────────────
  await loginAs(page, GMAIL_USER);

  // ── Step 5: Navigate directly to Edge's booking URL as Gmail user ────────
  await page.goto(`${BASE_URL}/bookings/${edgeBookingId}`, { waitUntil: 'networkidle' });

  // ── Step 6: Validate Access Denied ───────────────────────────────────────
  await expect(page.getByText('Access Denied')).toBeVisible();
  await expect(page.getByText('You are not authorized to view this booking')).toBeVisible();
});