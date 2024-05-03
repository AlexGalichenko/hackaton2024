import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { BurgerMenuFragment } from "../fragments/BurgerMenuFragment";

export class ProductsPage extends BasePage {
  //locators
  readonly burgerMenu = new BurgerMenuFragment(this.page.locator('#react-burger-menu-btn'))
  //methods
  pageUrl(): string {
    return "/inventory.html";
  }

}
