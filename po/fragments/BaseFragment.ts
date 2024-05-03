import { Locator, Page } from '@playwright/test';
 
export class BaseFragment {
  public page: Page;
  public rootLocator: Locator;
 
  constructor(locator: Locator) {
    this.page = locator.page();
    this.rootLocator = locator;
  }
}