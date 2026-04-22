import {Page, Locator, expect} from "@playwright/test";
import HandKnittedOptions from "../utils/categoryOptions.json";

type HandKnittedOptionsType = typeof HandKnittedOptions;
const handKnittedOptions: HandKnittedOptionsType = JSON.parse(JSON.stringify(HandKnittedOptions));

export class mainNavigationHeader{
    page: Page;
    home: Locator;
    shop: Locator;
    yarn: Locator;
    handKnitted: Locator
    knittingSupplies: Locator;
    wishList: Locator;
    wishListCount: Locator;
    cart: Locator;
    cartCount: Locator;
    search: Locator;
    searchInput: Locator;
    verfyTitle:Locator
    
    constructor(page: Page){
        this.page = page;
        this.home = this.page.locator("#menu-item-10135");
        this.shop = this.page.locator("#menu-item-126");
        this.yarn = this.page.locator("#menu-item-128");
        this.handKnitted = this.page.locator("#menu-item-129");
        this.knittingSupplies = this.page.locator("#menu-item-131");
        this.wishList = this.page.locator(".woo-wishlist-link");
        this.wishListCount = this.page.locator(".woo-wishlist-link .wishlist_products_counter_number");
        this.cart = this.page.locator(".woo-menu-icon");
        this.cartCount = this.page.locator(".woo-menu-icon .wcmenucart-details");
        this.search = this.page.locator(".search-toggle-li");
        this.searchInput = this.page.locator(".header-searchform input");
        this.verfyTitle = this.page.locator(".page-header-title");
    }

    async navigateToHome(){
        await this.home.click();
        await expect(this.verfyTitle).toHaveText("Home");
    }

    async navigateToShop(){
        await this.shop.click();
        await expect(this.verfyTitle).toHaveText("Shop");
    }

    async navigateToYarn(){
        await this.yarn.click();
        await expect(this.verfyTitle).toHaveText("Yarn");
    }

    async navigateToHandKnitted(expectedProduct: string){
        await this.handKnitted.hover();
        const optionSelector = handKnittedOptions[expectedProduct as keyof HandKnittedOptionsType];
        const optionLocator = this.page.locator(optionSelector);
        await optionLocator.click();
        await expect(this.verfyTitle).toHaveText(expectedProduct);
    }   

    async navigateToKnittingSupplies(){
        await this.knittingSupplies.click();
        await expect(this.verfyTitle).toHaveText("Knitting Supplies");
    }

    async navigateToWishList(){ 
        await this.wishList.click();
    }

    async verifyWishListCount(expectedCount: number) {
        const actualCount = await this.wishListCount.textContent();
        expect(actualCount).toBe(expectedCount.toString());
    }

    async navigateToCart(){
        await this.cart.click();
    }

    async verifyCartCount(expectedCount: number) {
        const actualCount = await this.cartCount.textContent();
        expect(actualCount).toBe(expectedCount.toString());
    }

    async navigateToSearch(searchTerm: string){
        await this.search.click();
        await this.searchInput.fill(searchTerm);
        await this.searchInput.press("Enter");
    }

}

export default mainNavigationHeader;