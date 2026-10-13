import { BaseClass } from "./BaseClass"

export class CommonFun extends BaseClass{

static async OpenApplication(url:string){
await this.page.goto(url)
console.log('application opened')
}
static async waitStatement(){
await this.page.waitForTimeout(3000);
console.log('waited for 3sec')
}
}