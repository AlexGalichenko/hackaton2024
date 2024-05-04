import { users } from '../data/testData';
import { test, expect } from '../po/fixtures';

test.describe('Checkout feature', () => {
  test.beforeEach('', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.standardUser);
  })
  
  test('Verify user able to place an order', async ({ productsPage, cartPage, checkoutPage, checkoutOverviewPage, checkoutSuccessPage }) => {
    await productsPage.productCard(1).addToCart.click();
    await expect(productsPage.header.cartCounter).toHaveText('1');
    await productsPage.header.cart.click();
    await cartPage.checkout.click();
    await checkoutPage.formFill('John', 'Doe', '333333');
    await checkoutPage.continue.click();
    await checkoutOverviewPage.finish.click();

    await expect(await checkoutSuccessPage.successMark).toBeVisible();
    await expect(await checkoutSuccessPage.successMessage).toHaveText('Thank you for your order!')
  });
})
