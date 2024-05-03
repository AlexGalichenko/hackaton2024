import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductCard } from "../fragments/ProductCard";
import { BurgerMenuFragment } from "../fragments/BurgerMenuFragment";

export class ProductsPage extends BasePage {
  get burgerMenu() {return new BurgerMenuFragment(this.page.locator('#react-burger-menu-btn'))}
    // Fragments
  productCard(index: number): ProductCard {
    return new ProductCard(this.page.locator(`[data-test="inventory-item"]:nth-child(${index})`));
  }

  // Methods
  pageUrl(): string {
    return "/inventory.html";
  }

}
