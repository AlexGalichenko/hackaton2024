import { users } from '../data/testData';
import { test, expect } from '../po/fixtures';

test.describe('Product Card Feature', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.standardUser);
  });

  test('Verify user able to open product card', async ({ productsPage, productPage }) => {
    const expectedTitle = await productsPage.productCard(1).title.innerText();
    await productsPage.productCard(1).title.click();
    await expect(productPage.title).toHaveText(expectedTitle);
  });

  test('Verify user able to add product to cart from product card page', async ({ productsPage, cartPage }) => {
    const expectedProduct = await productsPage.productCard(1).title.innerText();
    await productsPage.productCard(1).addToCart.click();
    await productsPage.cart.click();
    await expect(cartPage.cartItem(1).title).toHaveText(expectedProduct);
  });

  test('Verify user able to remove product from cart from product card page', async ({ page }) => {
  });

})


