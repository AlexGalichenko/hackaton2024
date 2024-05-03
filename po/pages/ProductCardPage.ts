import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductCardPage extends BasePage {
  readonly title: Locator = this.page.locator('[data-test="inventory-item-name"]');
  readonly addToCart: Locator = this.page.locator('[data-test="add-to-cart"]');
  readonly removeFromCart: Locator = this.page.locator('[data-test="remove"]');
}