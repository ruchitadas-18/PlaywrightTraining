import {expect, Page, Locator} from '@playwright/test';
export class BookingRefund{
    page: Page;
    refundBook: Locator;
    spinner: Locator;
    result: Locator;

    constructor(page: Page) {
        this.page = page;
        this.refundBook = this.page.getByTestId('check-refund-btn');
        this.spinner=this.page.locator("#refund-spinner");
        this.result = this.page.locator("#refund-result");
    }

    async refund(){
        this.refundBook.click();
        await expect(this.spinner).toBeVisible();
        await expect(this.spinner).not.toBeVisible({timeout:6000});
    }

    async refundEligibility(){
        await expect(this.result).toBeVisible();
        await expect(this.result).toContainText('Eligible for refund');
        await expect(this.result).toContainText('Single-ticket bookings qualify for a full refund');
    }

    async notEligibleForRefund(){
        await expect(this.result).toBeVisible();
        await expect(this.result).toContainText('Not eligible for refund. Group bookings (2 tickets) are non-refundable.');
        await expect(this.result).toContainText('Not eligible for refund. Group bookings (2 tickets) are non-refundable.');
    }
}

export default BookingRefund;