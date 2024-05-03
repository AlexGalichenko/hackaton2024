import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  readonly title: Locator = this.page.locator('[data-test="inventory-item-name"]');
}