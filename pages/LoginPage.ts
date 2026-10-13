import {BaseClass} from '../utils/BaseClass';

export class LoginPage extends BaseClass{
     //objects or locatoe elements
   static login_textBox= '//input[@name="txtUserName"]';
   static password_textBox='//input[@name="txtPassword"]' ;
   static login_button='//input[@name="Submit"]';
 

   //methods
   static async LoginName(userName:string,password:string){
   await this.page.locator(this.login_textBox).fill(userName);
   await this.page.locator(this.password_textBox).fill(password);
   await this.page.locator(this.login_button).click();
   console.log('login successfully')
   }
}