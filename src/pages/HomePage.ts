import {Page, Locator} from '@playwright/test'
import { Login } from "./Login";

export class HomePage{

    private page : Page;
    private readonly accountBtn: Locator;
    private readonly loginBtn: Locator;
    private login : Login;
    
    constructor(page: Page){
        this.login = new Login(page);
        this.accountBtn = page.getByTestId("header-member-menu-button");
        this.loginBtn = page.locator("[data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']");
        
    }

    async isLoggedIn(){
        return await this.accountBtn.isVisible(); 
    }

    async goTologin(email:string, password:string){
        await this.loginBtn.click();
        await this.login.login(email, password);


    }

}