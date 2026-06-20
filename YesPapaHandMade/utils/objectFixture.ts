import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import ProductListingPage from "../pages/productListingPage";
import MainNavigationHeader from "../pages/categoryHeader";
import SearchPage from "../pages/search";
import ProductDetailPage from "../pages/productDetailPage";
import WishListPage from "../pages/wishlist";
import Cart from "../pages/cart"; 
import { test as base } from "@playwright/test";

type ObjectFixture = {
    register: Register;
    login: Login;
    dashboard: Dashboard;
    productList: ProductListingPage;
    mainNavigationHeader: MainNavigationHeader; 
    searchPage: SearchPage;
    productDetailPage: ProductDetailPage;
    wishListPage: WishListPage;
    cart: Cart;
};

export const test = base.extend<ObjectFixture>({
    register: async ({ page }, use) => {
        await use(new Register(page));
    },
    login: async ({ page }, use) => {
        await use(new Login(page));
    },
    dashboard: async ({ page }, use) => {
        await use(new Dashboard(page));
    },
    productList: async ({ page }, use) => {
        await use(new ProductListingPage(page));
    },
    mainNavigationHeader: async ({ page }, use) => {
        const header = new MainNavigationHeader(page); 
        await use(header);
    },
    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },
    productDetailPage: async ({ page }, use) => {
        await use(new ProductDetailPage(page));
    },
    wishListPage: async ({ page }, use) => {
        await use(new WishListPage(page));
    },
    cart: async ({ page }, use) => {
        await use(new Cart(page));
    }
});

export { expect } from "@playwright/test";