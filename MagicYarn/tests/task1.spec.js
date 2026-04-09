const {test, expect} = require('playwright/test');
const ObjectFixture = require('../../Utils/objectFixture');

test('Create new event', async ({page})=>{
    const object = new ObjectFixture(page);

    await object.loginPage.navigate("https://eventhub.rahulshettyacademy.com/login");
    await object.loginPage.login();

    //Assertion
    const browserEvent = await page.locator(':text("Browse Events →")');
    await expect(browserEvent).toBeVisible();

    await object.loginPage.navigate("https://eventhub.rahulshettyacademy.com/admin/events");
    await object.newEvent.createEvent(); 

    //Assertion
    await expect(page.getByText('Event created!')).toBeVisible();
    console.log(`Created event: "${createNewEvent.eventTitle}"`);

    await object.loginPage.navigate("https://eventhub.rahulshettyacademy.com/events");
    await object.bookingDetails.extractEventDetail(createNewEvent.eventTitle);
    await object.bookingDetails.bookingDetailsForTwo();
    await object.bookingDetails.confirmBooking(createNewEvent.eventTitle);

    await object.loginPage.navigate("https://eventhub.rahulshettyacademy.com/events");
    const searchBox = page.getByPlaceholder('Search events, venues…');

    await searchBox.fill(createNewEvent.eventTitle);
    await searchBox.press('Enter');
    await expect(object.bookingDetails.eventsList.first()).toBeVisible();
    const updatedCard = object.bookingDetails.eventsList.filter({hasText: object.newEvent.eventTitle}).first();
    await expect(updatedCard).toBeVisible();
    const seatText = await updatedCard.locator(':text("seats available")').textContent();
    const seatsAfterBooking = parseInt(seatText);
    expect(seatsAfterBooking).toBe(object.bookingDetails.seatsBeforeBooking-2);


});