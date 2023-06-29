import {Page, Locator} from '@playwright/test'

export class EmailLoginPage{

    private readonly page : Page;
    private readonly emailTxtBox: Locator;
    private readonly continueBtn: Locator;

constructor(page: Page){
    this.page = page
    this.emailTxtBox = page.locator("#user");
    this.continueBtn = page.locator("#login");
}

async setEmail(email: string){
    await this.emailTxtBox.fill(email);
}

async clickButton(){
    await this.continueBtn.click();
}

}