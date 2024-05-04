import { users } from '../data/testData';
import { test, expect } from '../po/fixtures';

test.describe('Product Card Feature', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.standardUser);
  });

  test('Verify user able to open product card', async ({ productsPage, productCardPage }) => {
    const expectedTitle = await productsPage.productCard(1).title.innerText();
    await productsPage.productCard(1).title.click();
    await expect(await productCardPage.title.innerText()).toEqual(expectedTitle);
  });

  test('Verify user able to add product to cart from product card page', async ({ productsPage, productCardPage, cartPage }) => {
    await productsPage.productCard(1).title.click();
    const expectedProduct = await productCardPage.title.innerText();
  
    await productCardPage.addToCart.click();
    await productCardPage.header.cart.click();
    await expect(await cartPage.cartItem(1).title.innerText()).toEqual(expectedProduct);
  });

  test('Verify user able to remove product from cart from product card page', async ({ productsPage, productCardPage }) => {
    await productsPage.productCard(1).title.click();
    await productCardPage.addToCart.click();
    await expect(productCardPage.removeFromCart).toBeVisible();
    await expect(productCardPage.header.cartCounter).toHaveText('1');

    await productCardPage.removeFromCart.click();
    await expect(await productCardPage.addToCart).toBeVisible();
    await expect(productCardPage.header.cartCounter).not.toBeVisible(); 
  });

})


