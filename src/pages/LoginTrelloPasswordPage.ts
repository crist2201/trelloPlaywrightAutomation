import {Page, Locator} from '@playwright/test'

export class PasswordLoginPage{

    private readonly page : Page;
    private readonly passwordTxtBox: Locator;
    private readonly loginBtn: Locator;
    private readonly errorForm: Locator;

    constructor(page: Page){
        this.page = page
        this.passwordTxtBox = page.locator("#password");
        this.loginBtn = page.locator("#login-submit");
        this.errorForm = page.getByTestId("form-error--content");
    }

    async setPassword(password: string){
        await this.passwordTxtBox.fill(password);
    }


    async clickLoginButton(){
        await this.loginBtn.click();
    }

    async isErrorFormPresent(){
        return this.errorForm;
    }

    
}