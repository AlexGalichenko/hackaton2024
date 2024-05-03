import defineConfig from '../playwright.config.ts';
import { users } from '../data/testData';
import { test, expect } from '../po/fixtures';
import { deepEqual } from 'assert';

test.describe('Login/Logout feature', () => {
  test.beforeEach('', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.standardUser);
  })
  
  test('Verify user able to login', async ({ productsPage }) => {
    await expect(productsPage.page.url()).toContain(productsPage.pageUrl());
  }); 

  test('Verify user able to logout', async ({ productsPage, loginPage, baseURL }) => {
    await productsPage.burgerMenu.rootLocator.click();
    await productsPage.burgerMenu.logoutButton.click();
    await expect(loginPage.page).toHaveURL(baseURL as string);
  });
})