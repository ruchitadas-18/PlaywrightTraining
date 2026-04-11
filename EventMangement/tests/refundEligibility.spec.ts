import {test, expect} from 'playwright/test';
import ObjectFixture from '../utils/objectFixture';

//Not Eligible for refund if booking is for 2 seats and Eligible for refund if booking is for 1 seat.
test('Booking for two events', async({page})=>{

    // Create instances of the page objects using ObjectFixture
    const object = new ObjectFixture(page);
    const loginPage = object.loginPage();
    const bookingDetailsObject = object.bookingDetails(); 
    const refundDetailsObject = object.refundDetails();
    
    //Login to the application
    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/login");
    await loginPage.login();

    //Assertion to check if login is successful
    const browserEvent = await page.locator(':text("Browse Events →")');
    await expect(browserEvent).toBeVisible();
    
    // Booking Event for 2 seats
    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/events");
    await bookingDetailsObject.extractEventDetail("Dilli Diwali Mela");
    await bookingDetailsObject.bookingDetailsForTwo();
    await bookingDetailsObject.confirmBooking("Dilli Diwali Mela");
    await bookingDetailsObject.validatingBook("Dilli Diwali Mela");

    // Not Eligible for refund if booking is for 2 seats.
    await refundDetailsObject.refund();
    await refundDetailsObject.notEligibleForRefund();

})

//Eligible for refund if booking is for 1 seat.
test('Booking for one events', async({page})=>{

    // Create instances of the page objects using ObjectFixture
    const object = new ObjectFixture(page);
    const loginPage = object.loginPage();
    const bookingDetailsObject = object.bookingDetails(); 
    const refundDetailsObject = object.refundDetails();
    
    //Login to the application
    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/login");
    await loginPage.login();

    //Assertion to check if login is successful
    const browserEvent = await page.locator(':text("Browse Events →")');
    await expect(browserEvent).toBeVisible();
    
    // Booking Event for 1 seat
    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/events");
    await bookingDetailsObject.extractEventDetail("Dilli Diwali Mela");
    await bookingDetailsObject.bookingDetailsForOne();
    await bookingDetailsObject.confirmBooking("Dilli Diwali Mela");
    await bookingDetailsObject.validatingBook("Dilli Diwali Mela");
    
    // Eligible for refund if booking is for 1 seat.
    await refundDetailsObject.refund();
    await refundDetailsObject.refundEligibility();

})