const {test, expect} = require('playwright/test');
const LoginPage = require('../../page/login');
const BookingRefund = require('../../page/bookingRefund');
const Book = require('../../page/book');

test('Booking for two events', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/login");
    await loginPage.login();

    //Assertion
    const browserEvent = await page.locator(':text("Browse Events →")');
    await expect(browserEvent).toBeVisible();

    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/events");
    const confirmBook = new Book(page);
    await confirmBook.extractEventDetail("Dilli Diwali Mela");
    await confirmBook.bookingDetailsForTwo();
    await confirmBook.confirmBooking("Dilli Diwali Mela");
    await confirmBook.validatingBook("Dilli Diwali Mela");
    
    const validateBooking = new BookingRefund(page);
    await validateBooking.refund();
    await validateBooking.notEligibleForRefund();

})

test('Booking for one events', async({page})=>{
     const loginPage = new LoginPage(page);
    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/login");
    await loginPage.login();

    //Assertion
    const browserEvent = await page.locator(':text("Browse Events →")');
    await expect(browserEvent).toBeVisible();

    await loginPage.navigate("https://eventhub.rahulshettyacademy.com/events");
    const confirmBook = new Book(page);
    await confirmBook.extractEventDetail("Dilli Diwali Mela");
    await confirmBook.bookingDetailsForOne();
    await confirmBook.confirmBooking("Dilli Diwali Mela");
    await confirmBook.validatingBook("Dilli Diwali Mela");
    
    const validateBooking = new BookingRefund(page);
    await validateBooking.refund();
    await validateBooking.refundEligibility();

})