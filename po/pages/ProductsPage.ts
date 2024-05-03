import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductCard } from "../fragments/ProductCard";

export class ProductsPage extends BasePage {
  // Fragments
  productCard(index: number): ProductCard {
    return new ProductCard(this.page.locator(`[data-test="inventory-item"]:nth-child(${index})`));
  }

  // Locators
  readonly cart: Locator = this.page.locator('#shopping_cart_container');

  // Methods
  pageUrl(): string {
    return "/inventory.html";
  }

}
