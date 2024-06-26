import { users } from '../data/testData';
import { test, expect } from '../po/fixtures';

test.describe('Cart feature', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.standardUser);
  });
  
  test('Verify user able to add product to cart', async ({ productsPage, productCardPage, cartPage }) => {
    const expectedProduct = await productsPage.productCard(1).title.innerText();
  
    await productsPage.productCard(1).addToCart.click();
    await productCardPage.header.cart.click();
    await expect(await cartPage.cartItem(1).title.innerText()).toEqual(expectedProduct);
  });
  
  test('Verify user able to add two products to cart', async ({ page }) => {

  });
  
  test('Verify user able to remove product from cart', async ({ productsPage, productCardPage, cartPage }) => {
    await productsPage.productCard(1).addToCart.click();
    await expect(productsPage.productCard(1).removeFromCart).toBeVisible();

    await productsPage.productCard(1).removeFromCart.click();
    
  });
})
