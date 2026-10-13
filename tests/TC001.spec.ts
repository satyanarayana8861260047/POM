import {test} from '@playwright/test';
import { BaseClass } from '../utils/BaseClass';
import { CommonFun } from '../utils/CommonFun';
import { LoginPage } from '../pages/LoginPage';
import { VerifyPage } from '../pages/VarifyPage';
import { LogoutPage } from '../pages/LogoutPage';

test('using POM',async({page})=>{
     BaseClass.page=page;  //assigning page reference to BaseClass
    await CommonFun.OpenApplication('https://sureshitacademy.in/hrms/login.php');
    await CommonFun.waitStatement();
    await LoginPage.LoginName('sureshit','sureshit');
    await CommonFun.waitStatement();
    await VerifyPage.verifyPageTitle('SureshIT');
    await CommonFun.waitStatement();
    await LogoutPage.Logout();
    await CommonFun.waitStatement();

})