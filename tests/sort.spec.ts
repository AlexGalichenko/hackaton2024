import { users } from '../data/testData';
import { test, expect } from '../po/fixtures';

test.describe('Product Card Feature', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.login(users.standardUser);
    });
    test('Verify user able to sort products from low price to high', async ({ productsPage }) => {
        const sorted_prices = (await productsPage.get_prices()).sort((a, b) => (a - b))
        await productsPage.dropdown.selectOption('Price (low to high)');
        await expect(await productsPage.get_prices()).toEqual(sorted_prices);
    });
})