class BasePage{
    constructor(page){
        this.page = page;
    }

    async navigateToWebsite(url){
        await this.page.goto(url);
    }

    async getPageTitle(){
        return await this.page.title();
    }
}

module.exports = BasePage;