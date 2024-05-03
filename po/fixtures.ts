import { test as base } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { CartPage } from "./pages/CartPage";

type Objects = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  productPage: ProductPage;
  cartPage: CartPage;
};

const testExtendedWithPages = base.extend<Objects>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  }
});
export const test = testExtendedWithPages;
export const expect = test.expect;
export const slowExpect = expect.configure({ timeout: 10000 });
export const extrimelySlowExpect = expect.configure({ timeout: 20000 });

