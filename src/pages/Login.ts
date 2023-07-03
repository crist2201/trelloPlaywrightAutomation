import { Page } from '@playwright/test'
import { PasswordLoginPage } from './LoginTrelloPasswordPage';
import { EmailLoginPage } from './loginTrelloEmailPage';

export class Login{

    private page: Page;
    private loginEmailPage : EmailLoginPage;
    private loginPasswordPage: PasswordLoginPage;


    constructor(page: Page){
        this.loginEmailPage = new EmailLoginPage(page);
        this.loginPasswordPage = new PasswordLoginPage(page);
    }

    async login(email:string, password:string){
        await this.loginEmailPage.setEmail(email);
        await this.loginEmailPage.clickButton();
        await this.loginPasswordPage.setPassword(password);
        await this.loginPasswordPage.clickLoginButton();
    }






}