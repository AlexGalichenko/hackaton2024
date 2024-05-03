import { Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  //locators
  readonly userNameInput: Locator = this.page.locator("#user-name");
  readonly passwordInput: Locator = this.page.locator("#password");
  readonly loginBtn: Locator = this.page.locator("#login-button");

  pageUrl(): string {
    return "";
  }
  //methods
  public async login(user: {username: string, password: string}): Promise<void> {
    console.log(`Attemting to login with credentials page ${user.username}, ${user.password}`);
    await this.userNameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginBtn.click();
  }
  
}
