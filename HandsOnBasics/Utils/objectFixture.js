const LoginPage = require('../page/login');
const BookingRefund = require('../page/bookingRefund');
const Book = require('../page/book');
const CreateNewPage = require('../page/createNewEvent');

class ObjectFixture {
    constructor(page) {
        this.page = page;
    }

    loginPage() {
        return new LoginPage(this.page);
    }

    newEvent() {
        return new CreateNewPage(this.page);
    }

    bookingDetails() {
        return new Book(this.page);
    }

    refundDetails() {
        return new BookingRefund(this.page);
    }
}

module.exports = ObjectFixture;