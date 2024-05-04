import { Locator } from "@playwright/test";
import { BaseFragment } from "./BaseFragment";

export class Header extends BaseFragment {
  constructor(locator: Locator) {
    super(locator);
  }
  
  readonly cart: Locator = this.page.locator('#shopping_cart_container');
  readonly cartCounter: Locator = this.page.locator('[data-test="shopping-cart-badge"]');
}