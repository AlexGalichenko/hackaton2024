import { Locator } from "@playwright/test";
import { CartItem } from "../fragments/CartItem";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  cartItem(index: number): CartItem {
    return new CartItem(this.page.locator(`[data-test="inventory-item"]:nth-child(${index + 2})`));
  }

  readonly checkout: Locator = this.page.locator('#checkout');
}