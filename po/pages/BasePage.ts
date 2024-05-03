import { expect, Locator, Page } from "@playwright/test";
import { Header } from "../fragments/Header";

export class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //locators
  readonly title: Locator;
  //readonly header: Header = new Header(this.page.locator('#header_container'));

  get header(): Header {
    return new Header(this.page.locator('#header_container'));
  }

  pageUrl(): string {
    return ''
  }

  async open(url?: string): Promise<void> {
    url ? await this.page.goto(url) : await this.page.goto(this.pageUrl());
  }
}
