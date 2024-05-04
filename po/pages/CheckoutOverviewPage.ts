import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutOverviewPage extends BasePage {
  // Locators
  readonly finish: Locator = this.page.locator('#finish');
}