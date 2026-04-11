import { Page } from "@playwright/test";
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

export class ClassFixture {
    page: Page;
    register: Register;
    login: Login;
    dashboard: Dashboard;   

    constructor(page: Page) {
        this.page = page;
        this.register = new Register(page);
        this.login = new Login(page);
        this.dashboard = new Dashboard(page);
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
}

export default ClassFixture;