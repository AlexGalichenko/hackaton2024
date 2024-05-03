import { Locator, Page } from '@playwright/test';

export class BaseFragment {
  public page: Page;
  public rootLocator: Locator;

  constructor(locator: string) {
    this.rootLocator = this.page.locator(locator);
  }
}
