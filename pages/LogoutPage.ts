import { BaseClass } from "../utils/BaseClass";
export class LogoutPage extends BaseClass{
    //locators
    static logout_link='//a[text()="Logout"]';

    //methods or functions
    static async Logout(){
        await this.page.locator(this.logout_link).click()
        console.log('logout successfully done')
    }
}