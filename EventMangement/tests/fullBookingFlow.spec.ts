import {test, expect} from 'playwright/test';
import ObjectFixture from '../utils/objectFixture';

//Creating a new event, booking for that event and validating the booking and refund flow for that event.
test('Create new event', async ({page})=>{

    // Create instances of the page objects using ObjectFixture
    const object = new ObjectFixture(page);
    const loginObject = object.loginPage();
    const createNewEventObject = object.newEvent(); 
    const bookingDetailsObject = object.bookingDetails();

    //Login to the application
    await loginObject.navigate("https://eventhub.rahulshettyacademy.com/login");
    await loginObject.login();

    //Assertion to check if login is successful
    const browserEvent = await page.locator(':text("Browse Events →")');
    await expect(browserEvent).toBeVisible();
    
    // Create a new event
    await loginObject.navigate("https://eventhub.rahulshettyacademy.com/admin/events");
    await createNewEventObject.createEvent(); 

    //Assertion to check if event is created successfully
    await expect(page.getByText('Event created!')).toBeVisible();
    console.log(`Created event: "${createNewEventObject.eventTitle}"`);

    // Booking for the created event
    await loginObject.navigate("https://eventhub.rahulshettyacademy.com/events");
    await bookingDetailsObject.extractEventDetail(createNewEventObject.eventTitle);
    await bookingDetailsObject.bookingDetailsForTwo();
    await bookingDetailsObject.confirmBooking(createNewEventObject.eventTitle);

    // Validating the booking
    await loginObject.navigate("https://eventhub.rahulshettyacademy.com/events");
    const searchBox = page.getByPlaceholder('Search events, venues…');
    await searchBox.fill(createNewEventObject.eventTitle);
    await searchBox.press('Enter');
    await expect(bookingDetailsObject.eventsList.first()).toBeVisible();
    const updatedCard = bookingDetailsObject.eventsList.filter({hasText: createNewEventObject.eventTitle}).first();
    await expect(updatedCard).toBeVisible();

    // Extract the number of seats available after booking
    const seatText: any= await updatedCard.locator(':text("seats available")').textContent();
    const seatsAfterBooking = parseInt(seatText);
    expect(seatsAfterBooking).toBe(bookingDetailsObject.seatsBeforeBooking-2);


});