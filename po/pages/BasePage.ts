import { expect, Locator, Page } from "@playwright/test";
import { Header } from "../fragments/Header";

export class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  readonly title: Locator;

  // Fragments
  get header(): Header {
    return new Header(this.page.locator('#header_container'));
  }

  // Methods
  pageUrl(): string {
    return ''
  }

  async open(url?: string): Promise<void> {
    url ? await this.page.goto(url) : await this.page.goto(this.pageUrl());
  }
}
