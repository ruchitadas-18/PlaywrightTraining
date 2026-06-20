import {Page, Locator, expect} from "@playwright/test";

export class Cart {
    page: Page;
    breadCrumb: Locator;
    alertMessage: Locator;
    cartTable: Locator;
    undoMessage: Locator;
    total: any;
    totalTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.breadCrumb = page.getByRole('link', { name: 'Cart' });
        this.alertMessage = page.locator(".woocommerce-error");
        this.cartTable = page.locator(".woocommerce-cart-form__cart-item");
        this.undoMessage = page.getByRole("alert", { name: '.woocommerce-message' });
        this.totalTable = page.locator(".cart_totals");
    }

    async verifyPage(){
        await expect(this.breadCrumb).toBeVisible();
        await expect(this.breadCrumb).toContainText("Cart");
        const text = await this.breadCrumb.textContent(); 
        console.log(text);
    }
    
    async verifyProductInCart(expectedProduct: string) {
        const rows = this.cartTable;
        const count = await rows.count();
        for (let i = 0; i < count; i++) {   
            const row = rows.nth(i);
            const productName = await row.locator('.product-name').textContent();
            await expect(productName).toContain(expectedProduct);
            console.log(`Product in cart: ${productName?.trim()}`);
        }
    }
    
    async verifyStockAlertMessage() {
        await expect(this.alertMessage).toBeVisible();
        await expect(this.alertMessage).toContainText("Sorry, we do not have enough");
        const text = await this.alertMessage.textContent(); 
        console.log(text);
    }

    async productEqualToStock() {
        const rows = this.cartTable;
        const count = await rows.count();   
        await expect(this.alertMessage).toBeVisible();
        const alertText = await this.alertMessage.textContent();
        const productText = alertText?.split('"')[1]; // Extracting the product name from the alert message
        const stockAvailable = parseInt((alertText?.split('(')[1]?.split(' ')[0]) ?? '0');

        for (let i = 0; i < count; i++) {
            const row = rows.nth(i);
            const productCell = row.locator('.product-name');
            if ((await productCell.textContent())?.includes(productText ?? '')) {
                const qtyInput = row.locator('input.qty');
                let itemSelected = Number(await qtyInput.inputValue());
                const minusButton = row.locator(".minus");
                if (stockAvailable < itemSelected) {
                    await minusButton.click();
                    await expect(qtyInput).not.toHaveValue(String(itemSelected));
                    itemSelected = Number(await qtyInput.inputValue());
                }
                console.log(`Selected item quantity: ${itemSelected}, Stock available: ${stockAvailable}`);
                break;
            }
        }
    }

    async verifyTheTotal() {
        const rows = this.cartTable;
        const count = await rows.count();

        for (let i = 0; i < count; i++) {
            const row = rows.nth(i);
            const productName = await row.locator('.product-name').textContent();
            const price = Number((await row.locator('.product-price').textContent()) ?.replace(/[^\d.]/g, '') ?? 0);
            const quantity = Number(await row.locator('input.qty').inputValue());
            const subtotal = Number((await row.locator('.product-subtotal').textContent())?.replace(/[^\d.]/g, '') ?? 0);
            expect(subtotal).toBeCloseTo(price * quantity, 2);
            console.log(`${productName?.trim()} | \nprice=${price}\n qty=${quantity}\n subtotal=${subtotal}`);
            this.total = this.total ? this.total + subtotal : subtotal;
        }
    }

   async removeProductFromCart(productText: string) {
        const rows = this.cartTable;
        const count = await rows.count();

        for (let i = 0; i < count; i++) {
            const row = rows.nth(i);
            const productName = (await row.locator('.product-name').textContent())?.trim();
            console.log(`Checking product: ${productName}`);

            if (productName === productText.trim()) {
                await row.getByRole('cell', { name: `Remove ${productText}` }).click();

                console.log(`Removed product: ${productText}`);
                break;
            }
        }
    }

    async undoRemoveProduct(productText: string) {
        await expect(this.page.locator(".woocommerce-message")).toBeVisible();
        await expect(this.undoMessage).toContainText(`“${productText}” removed.`);
        await this.undoMessage.locator(".restore-item").click();

        const rows = this.cartTable;
        const count = await rows.count();

        for (let i = 0; i < count; i++) {
            const row = rows.nth(i);
            const productName = (await row.locator('.product-name').textContent())?.trim();
            console.log(`Product Added: ${productName}`);
        }
    }

    async navigateToCheckout() {
        const checkoutButton = this.page.getByRole('link', { name: 'Proceed to checkout' });
        await expect(checkoutButton).toBeVisible();
        await checkoutButton.click();
    }

    async verifytheTotalInCheckout() {
        await expect(this.totalTable).toBeVisible();
        const checkoutTotal = this.totalTable.locator('.cart-subtotal');
        await expect(checkoutTotal).toBeVisible();
        const checkoutTotalValue = Number((await checkoutTotal.textContent())?.replace(/[^\d.]/g, '') ?? 0);
        expect(checkoutTotalValue).toBeCloseTo(this.total, 2);
        console.log(`Checkout Total: ${checkoutTotalValue}, Cart Total: ${this.total}`);
    }


        
}

export default Cart;