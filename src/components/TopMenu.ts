import {Page, Locator} from '@playwright/test' 



export class TopMenu{

    private readonly page : Page;
    private readonly createBtn: Locator;
    private readonly templateBtn: Locator;
    private readonly accountBtn: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.accountBtn = page.getByTestId("header-member-menu-button");
        this.createBtn = page.getByTestId("header-create-menu-button");
    }

    async checkAccountBtn(){
        return await this.accountBtn.isVisible();
    }

    async clickAccountBtn(){
        await this.accountBtn.waitFor({state: 'visible'});
        await this.accountBtn.click();
    }


    async checkEmail(email: string){
        return this.page.getByText(email); 
    }


    async clickCreateBtn(){
        await this.createBtn.click();
    }

}