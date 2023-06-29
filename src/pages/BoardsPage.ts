import {Page, Locator} from '@playwright/test' 

export class BoardsPage{

    private readonly page : Page;
    private readonly accountBtn: Locator;
    private readonly createBtn: Locator;

    constructor(page: Page){
        this.page = page
        this.accountBtn = page.getByTestId("header-member-menu-button");
        this.createBtn = page.getByTestId("header-create-menu-button");
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