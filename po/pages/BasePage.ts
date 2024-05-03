import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //locators
  readonly title: Locator;

  pageUrl(): string {
    return ''
  }

  async open(url?: string): Promise<void> {
    url ? await this.page.goto(url) : await this.page.goto(this.pageUrl());
  }
}
