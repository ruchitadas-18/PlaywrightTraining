const LoginPage = require('../page/login');
const BookingRefund = require('../page/bookingRefund');
const Book = require('../page/book');
const createNewPage = require('../page/createNewEvent');

class ObjectFixture{
    constructor(page){
        this.page = page;
    }

    async loginPage(){
        new LoginPage(this.page);
    }

    async newEvent(){
        new createNewPage(page);
    }

    async bookingDetails(){
        new Book(page);
    }

    async refundDetails(){
        new BookingRefund(page);
    }
    
}

module.exports = ObjectFixture;