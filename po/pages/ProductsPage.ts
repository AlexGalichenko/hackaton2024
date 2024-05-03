import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductCard } from "../fragments/ProductCard";

export class ProductsPage extends BasePage {
  // Fragments
  productCard(index: number): ProductCard {
    return new ProductCard(this.page.locator(`[data-test="inventory-item"]:nth-child(${index})`));
  }

  // Methods
  pageUrl(): string {
    return "/inventory.html";
  }

}
