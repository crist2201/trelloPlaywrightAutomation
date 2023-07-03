import {Page, Locator} from '@playwright/test'
import { TopMenu } from '../components/TopMenu';
import { Login } from "./Login";

export class HomePage{

    private page : Page;
    private topMenu : TopMenu;
    private readonly loginBtn: Locator;
    private login : Login;
    
    constructor(page: Page){
        this.login = new Login(page);
        this.topMenu = new TopMenu(page);
        this.loginBtn = page.locator("[data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']");
        
    }

    async isLoggedIn(){
        return await this.topMenu.checkAccountBtn(); 
    }

    async goTologin(email:string, password:string){
        await this.loginBtn.click();
        await this.login.login(email, password);


    }

}