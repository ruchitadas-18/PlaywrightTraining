const LoginPage = require('../PageObject/LoginPage')
const Dashboard = require('../PageObject/Dashboard')

class PoManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboard = new Dashboard(page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboard(){
        return this.dashboard;
    }
}   

module.exports = PoManager;