import { Locator } from "@playwright/test";
import { BaseFragment } from "./BaseFragment";

export class CartItem extends BaseFragment {
  constructor(locator: Locator) {
    super(locator);
  }

  readonly title: Locator = this.rootLocator.locator('a[id*="title"] div');
}