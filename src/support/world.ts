import { IWorldOptions, World } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from 'playwright';
import type { HomePage } from '../pages/home.page';

export class CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  homePage?: HomePage;
  readonly baseUrl: string;

  constructor(options: IWorldOptions) {
    super(options);
    this.baseUrl = (options.parameters.baseUrl as string) || 'https://playwright.dev';
  }
}
