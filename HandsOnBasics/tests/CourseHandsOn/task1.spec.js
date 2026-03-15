const {test, expect} = require('playwright/test');
const LoginPage = require('../../page/login');
const createNewPage = require('../../page/createNewEvent');
const Book = require('../../page/book');

test('Create new event', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/login");
    await loginPage.login();

    //Assertion
    const browserEvent = await page.locator(':text("Browse Events →")');
    await expect(browserEvent).toBeVisible();

    const createNewEvent = new createNewPage(page);
    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/admin/events");
    await createNewEvent.createEvent(); 

    //Assertion
    await expect(page.getByText('Event created!')).toBeVisible();
    console.log(`Created event: "${createNewEvent.eventTitle}"`);

    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/events");
    const confirmBook = new Book(page);
    await confirmBook.extractEventDetail(createNewEvent.eventTitle);
    await confirmBook.bookingDetails();
    await confirmBook.confirmBooking(createNewEvent.eventTitle);

    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/events");
    const searchBox = page.getByPlaceholder('Search events, venues…');

    await searchBox.fill(createNewEvent.eventTitle);
    await searchBox.press('Enter');
    await expect(confirmBook.eventsList.first()).toBeVisible();
    const updatedCard = confirmBook.eventsList.filter({hasText: createNewEvent.eventTitle}).first();
    await expect(updatedCard).toBeVisible();
    const seatText = await updatedCard.locator(':text("seats available")').textContent();
    const seatsAfterBooking = parseInt(seatText);
    expect(seatsAfterBooking).toBe(confirmBook.seatsBeforeBooking-2);


});