import { Locator } from '@playwright/test';
import { BaseFragment } from './BaseFragment';

export class BurgerMenuFragnment extends BaseFragment {
  constructor() {
    super('//div[@class="rt-tr-group"]')
  }
}
