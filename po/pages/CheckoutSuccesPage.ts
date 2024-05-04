import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutSuccessPage extends BasePage {
  // Locators
  readonly successMark: Locator = this.page.locator('[data-test="pony-express"]');
  readonly successMessage: Locator = this.page.locator('[data-test="complete-header"]');
}