import {Page, Locator} from '@playwright/test'

export class CreateNewEvent {

    page: Page;
    titleInput: Locator;
    categoryDropdown: Locator;
    cityInput: Locator;
    venueInput: Locator;
    dateTime: Locator;
    priceInput: Locator;
    seat: Locator;  
    addEventButton: Locator;
    eventTitle: any;
    
    constructor(page: Page) {
        this.page = page;
        this.titleInput = this.page.getByPlaceholder("Event Title");
        this.categoryDropdown = this.page.locator('#category');
        this.cityInput = this.page.getByPlaceholder("e.g. Bangalore");
        this.venueInput = this.page.getByPlaceholder("Venue name & address");
        this.dateTime = this.page.getByLabel("Event Date & Time*");
        this.priceInput = this.page.getByLabel("Price ($)*");
        this.seat = this.page.getByLabel('Total Seats*');
        this.addEventButton = this.page.getByRole("button", { name: "+ Add Event" });
    }

    async createEvent() {
        this.eventTitle = `Tech Conference ${Date.now()}`;
        await this.titleInput.fill(this.eventTitle);
        await this.categoryDropdown.selectOption("Concert");
        await this.cityInput.fill("New York");
        await this.venueInput.fill("Madison Square Garden, New York, NY");
        await this.dateTime.fill("2026-12-15T20:00");
        await this.priceInput.fill("100");
        await this.seat.fill("50");
        await this.addEventButton.click();
    }

}

export default CreateNewEvent;