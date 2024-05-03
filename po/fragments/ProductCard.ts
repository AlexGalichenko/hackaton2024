import { Locator, Page } from '@playwright/test';
import { BaseFragment } from './BaseFragment';

export class ProductCard extends BaseFragment {
  constructor(locator: Locator) {
    super(locator);
  }

  readonly title: Locator = this.rootLocator.locator('a[id*="title"]');
  readonly addToCart: Locator = this.rootLocator.locator('[id*="add-to-cart"]');
}
