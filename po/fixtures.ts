import { test as base } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductCardPage } from "./pages/ProductCardPage";
import { CartPage } from "./pages/CartPage";

type Objects = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  productCardPage: ProductCardPage;
  cartPage: CartPage;
};

const testExtendedWithPages = base.extend<Objects>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  productCardPage: async ({ page }, use) => {
    await use(new ProductCardPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  }
});
export const test = testExtendedWithPages;
export const expect = test.expect;
export const slowExpect = expect.configure({ timeout: 10000 });
export const extremelySlowExpect = expect.configure({ timeout: 20000 });

