import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductCard } from "../fragments/ProductCard";
import { BurgerMenuFragment } from "../fragments/BurgerMenuFragment";

export class ProductsPage extends BasePage {
  get burgerMenu() { return new BurgerMenuFragment(this.page.locator('#react-burger-menu-btn')) };
  get dropdown() { return this.page.locator('.product_sort_container') };

  productCard(index: number): ProductCard {
    return new ProductCard(this.page.locator(`[data-test="inventory-item"]:nth-child(${index})`));
  }

  pageUrl(): string {
    return "/inventory.html";
  }
  async get_prices(): Promise<number[]> {
    const priceElements: any = await this.page.locator('.inventory_item_price');
    const pricesText = await priceElements.allInnerTexts();
    return pricesText.map((price: string) => parseFloat(price.slice(1)));
  }
}
