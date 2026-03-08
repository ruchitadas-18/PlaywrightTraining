class comparePage {
    
    constructor(page) {
        this.page = page;
        this.tableVisible = this.page.locator('.compare-products-table');
        this.rows = this.tableVisible.locator('tbody tr').count();
        this.columns = this.tableVisible.locator('tbody tr').first().locator('td').count()
    }

    async verifyProductName() {
        for (let j = 0; j < this.columns; ++j) {
            const text = await this.tableVisible.locator('tbody tr').nth(1).locator('td').nth(j).textContent();
            console.log(text);
        }

    }

    async selectCheaperProduct() {
        const ans = 0;
        const min = await this.tableVisible.locator('tbody tr').last().locator('td').nth(0).textContent();
        for (let j = 0; j < this.columns; ++j) {
            const val = await this.tableVisible.locator('tbody tr').last().locator('td').nth(j).textContent();
            if(val < min){
                min = val;
                ans = j;
            }
        }
        return ans;
    }

}


module.exports = comparePage;