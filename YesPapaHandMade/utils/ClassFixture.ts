import { Page } from "@playwright/test";
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import ProductListingPage from "../pages/productListingPage";
import mainVavigationHeader from "../pages/categoryHeader";

export class ClassFixture {
    page: Page;
    register: Register;
    login: Login;
    dashboard: Dashboard;  
    productList: ProductListingPage;
    mainVavigationHeader: mainVavigationHeader; 

    constructor(page: Page) {
        this.page = page;
        this.register = new Register(page);
        this.login = new Login(page);
        this.dashboard = new Dashboard(page);
        this.productList = new ProductListingPage(page);
        this.mainVavigationHeader = new mainVavigationHeader(page);
    }

    async createRegisterInstance() {
        return this.register;
    }

    async createLoginInstance() {
        return this.login;
    }
    async createDashboardInstance() {
        return this.dashboard;
    }
    async createProductListingPageInstance() {
        return this.productList;
    }
    async createMainNavigationHeaderInstance() {
        return this.mainVavigationHeader;
    }
}

export default ClassFixture;