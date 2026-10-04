import assert from 'node:assert/strict';
import { Then, When } from '@cucumber/cucumber';
import { HomePage } from '../pages/home.page';
import { CustomWorld } from '../support/world';

When('I open the Playwright homepage', async function (this: CustomWorld) {
  this.homePage = new HomePage(this.page!);
  await this.homePage.open(this.baseUrl);
});

Then('the page title should contain {string}', async function (this: CustomWorld, expected: string) {
  const title = await this.homePage!.title();
  assert.ok(title.includes(expected), `Expected page title "${title}" to contain "${expected}"`);
});
