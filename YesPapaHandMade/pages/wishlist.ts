import { de } from "@faker-js/faker";
import {expect, Locator, Page} from "@playwright/test";

export class WishListPage {
    page: Page;
    wishListTitle: Locator; 
    itemRow:Locator;

    constructor(page: Page) {
        this.page = page;
        this.wishListTitle = this.page.locator('.page-header-title');
        this.itemRow = this.page.locator('.wishlist_item');
    }

    async verifyWishListPageTitle() {
        await expect(this.wishListTitle).toHaveText("Wishlist");
    }

    async verifyProductInWishList(productName: string) {
        const productLocator = this.itemRow.filter({ hasText: productName }).locator('.product-name');
        await expect(productLocator).toBeVisible();
        console.log(`Product ${productName} is present in the wishlist.`);
    }

    async verifyStockStatus(producName: string){
        const stockStatus = this.itemRow.filter({ hasText: producName }).locator('.product-stock');
        const stockStatusText = await stockStatus.textContent();
        console.log(`Stock status for ${producName}: ${stockStatusText}`);
    }

    async deleteProductFromWishList(productName: string) {
        const deleteButton = this.itemRow.filter({ hasText: productName }).getByTitle('Remove',{exact: true});
        await deleteButton.click();
        const deleteModel = this.page.locator('div').filter({ hasText: productName }).nth(4)
        await expect(deleteModel).toBeVisible();
        await deleteModel.getByRole('button', { name: 'Close' }).click();
    }

    async actionProductFromWishList(productName: string) {
        const actionButton = this.itemRow.filter({ hasText: productName }).locator("product-action"); 
        
    }

    async selectProductForBulkAction(productName: string) {
        const productCheckbox = this.itemRow.filter({ hasText: productName }).getByTitle("Select for bulk action",{exact: true});
        await productCheckbox.check();
    }

}
export default WishListPage;