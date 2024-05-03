import { Locator, Page } from '@playwright/test';
 import { BaseFragment } from './BaseFragment';

export class BurgerMenuFragment extends BaseFragment {
  constructor(locator: Locator) {
    super(locator)
  }
  get logoutButton() {return this.page.locator('#logout_sidebar_link')}
}
