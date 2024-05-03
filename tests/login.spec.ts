import { users } from '../data/testData';
import { test, expect } from '../po/fixtures';

test.describe('Login/Logout feature', () => {
  test.beforeEach('', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.standardUser);
  })
  
  test('Verify user able to login', async ({ productsPage }) => {
    await expect(productsPage.page.url()).toContain(productsPage.pageUrl());
  }); 

  test('Verify user able to logout', async ({ productsPage }) => {
    await productsPage.page.url()
  });
})