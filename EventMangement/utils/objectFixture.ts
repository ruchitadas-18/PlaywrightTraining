import LoginPage from '../pages/login';
import BookingRefund from '../pages/bookingRefund';
import Book from '../pages/book';
import CreateNewPage from '../pages/createNewEvent';
import {Page} from '@playwright/test';

class ObjectFixture {
    page: Page;
    private _loginPage: LoginPage;
    private _newEvent: CreateNewPage;
    private _bookingDetails: Book;
    private _refundDetails: BookingRefund;

    constructor(page: Page) {
        this.page = page;
        this._loginPage = new LoginPage(this.page);
        this._newEvent = new CreateNewPage(this.page);
        this._bookingDetails = new Book(this.page);
        this._refundDetails = new BookingRefund(this.page);
    }

    loginPage() {
        return this._loginPage;
    }

    newEvent() {
        return this._newEvent;
    }

    bookingDetails() {
        return this._bookingDetails;
    }

    refundDetails() {
        return this._refundDetails;
    }
}

export default ObjectFixture;