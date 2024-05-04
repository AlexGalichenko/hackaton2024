import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  // Locators
  readonly firstName: Locator = this.page.locator('#first-name');
  readonly lastName: Locator = this.page.locator('#last-name');
  readonly postalCode: Locator = this.page.locator('#postal-code');
  readonly continue: Locator = this.page.locator('#continue');

  // Methods
  async formFill(firstName: string, lastName: string, postalCode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }
}