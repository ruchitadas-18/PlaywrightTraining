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
    verfyTitle: Locator;
    cartList:Locator;

    
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
        this.cartList = this.page.locator(".current-shop-items-dropdown li.woocommerce-mini-cart-item");
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

    async verifyCartCount() {
        await this.cart.hover();
        await expect(this.cartList).toBeVisible();
        const rowCount = await this.cartList.count();
        let expectedCount = 0;
        for (let i = 0; i < rowCount; i++) {
            const items = await this.cartList.nth(i);
            const itemName = await items.locator('h3 > a').innerText();
            const quantityText = await items.locator('.quantity').innerText();
            const itemCount = await items.locator('.quantity > .amount');
            console.log(`Cart name: ${itemName},\n Cart count: ${itemCount}, \n Cart quantity text: ${quantityText} `);
           expectedCount += parseInt(quantityText.split('×')[0].trim(), 10) * parseInt((await this.cartCount.innerText()).replace(/[^0-9]/g, ''), 10);
        }
        console.log(`Total cart count: ${expectedCount}`);
        const subtotalValue = Number((await this.page.locator('.total .woocommerce-Price-amount bdi').textContent())?.replace(/[^0-9.]/g, ''));
        expect(subtotalValue).toBe(expectedCount);
    }


    async navigateToSearch(searchTerm: string){
        await this.search.click();
        await this.searchInput.fill(searchTerm);
        await this.searchInput.press("Enter");
    }

}

export default mainNavigationHeader;