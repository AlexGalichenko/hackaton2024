import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  //locators
  readonly userNameInput: Locator = this.page.locator("#user-name");
  readonly passwordInput: Locator = this.page.locator("#password");
  readonly loginBtn: Locator = this.page.locator("#login-button");

  //methods
  pageUrl(): string {
    return "/inventory.html";
  }

}
