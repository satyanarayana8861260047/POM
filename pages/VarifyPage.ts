import { BaseClass } from '../utils/BaseClass';
import { expect } from '@playwright/test';

export class VerifyPage extends BaseClass {
//--Verify Page Title
static async verifyPageTitle(expectedTitle: string) {
   await expect(this.page).toHaveTitle(expectedTitle);
   console.log("Title Matched");
}

}