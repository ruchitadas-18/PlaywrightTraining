import {expect,Page,Locator} from '@playwright/test'
import testDataJson from '../utils/testData.json';

type TestData = typeof testDataJson;
const testData:TestData = JSON.parse(JSON.stringify(testDataJson));

export class Book{
    page: Page;
    eventsList: Locator
    ticketCount: Locator;
    firstName: Locator;
    emailName: Locator;
    phoneNumber: Locator;
    bookingButton: Locator;
    viewBookingButton: Locator;
    bookingCards: Locator;
    seatsBeforeBooking: any;
    bookingRef: any;

    constructor(page: Page){
        this.page = page;
        this.eventsList = this.page.getByTestId('event-card');
        this.ticketCount = this.page.locator('#ticket-count');
        this.firstName = this.page.getByLabel('Full Name*')
        this.emailName = this.page.getByLabel('Email*');
        this.phoneNumber = this.page.getByLabel('Phone Number*')
        this.bookingButton = this.page.getByRole('button',{name:'Confirm Booking'});
        this.viewBookingButton = this.page.getByRole('link',{name: 'View My Bookings'});
        this.bookingCards = this.page.getByTestId('booking-card');
       
    }

    async extractEventDetail(eventTitle: string){
        await expect(this.eventsList.first()).toBeVisible();
        const targetCard = this.eventsList.filter({ hasText: eventTitle }).first();
        await expect(targetCard).toBeVisible({ timeout: 5000 });

        //Seat Count
        this.seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
        console.log(`Seats before booking: ${this.seatsBeforeBooking}`);

        //Booking
        await targetCard.getByTestId('book-now-btn').click();
    }

    async bookingDetailsForTwo() {
        await expect(this.ticketCount).toHaveText('1');

        await this.page.getByRole('button', { name: '+' }).click();
        await expect(this.ticketCount).toHaveText('2');

        await this.firstName.fill(testData.fullName);
        await this.emailName.fill(testData.email);
        await this.phoneNumber.fill(testData.phone);

        await this.bookingButton.click();
    }

    async bookingDetailsForOne() {
        await expect(this.ticketCount).toHaveText('1');

        await this.firstName.fill(testData.fullName);
        await this.emailName.fill(testData.email);
        await this.phoneNumber.fill(testData.phone);

        await this.bookingButton.click();
    }

    async confirmBooking(eventTitle: string){
        await expect(this.page.getByRole('heading', { name: 'Booking Confirmed! 🎉' })).toBeVisible();
        const bookingRefEl = this.page.locator('.booking-ref').first();
        await expect(bookingRefEl).toBeVisible();

        this.bookingRef = (await bookingRefEl.innerText()).trim();
        expect(this.bookingRef.charAt(0)).toBe(eventTitle.trim().charAt(0).toUpperCase());

        console.log(`Booking Confirm Ref: ${this.bookingRef}`);

        await this.viewBookingButton.click();
        await expect(this.page).toHaveURL('https://eventhub.rahulshettyacademy.com/bookings');
        
        await expect(this.bookingCards.first()).toBeVisible();
        const matchingCard = this.bookingCards.filter({ has: this.page.locator('.booking-ref', { hasText: this.bookingRef }) });
        await expect(matchingCard).toBeVisible();
        await expect(matchingCard).toContainText(eventTitle);
        console.log(`Booking card found in My Bookings for ref: ${this.bookingRef}`);
    }

    async validatingBook(eventTitle: string){

        const targetCard = this.bookingCards.filter({ has: this.page.locator('.booking-ref', { hasText: this.bookingRef })});

        await targetCard.getByRole('button', { name: 'View Details' }).click();
        const nameChar = eventTitle.trim().charAt(0).toUpperCase();
        const refChar = this.bookingRef.charAt(0);
        expect(refChar).toBe(nameChar);
        console.log(refChar);
    }


}

export default Book;