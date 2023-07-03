import {Page, Locator} from '@playwright/test' 



export class SideBar{

    private readonly page : Page;
    private readonly addBtn: Locator;


    constructor(page: Page){
        this.page = page
        this.addBtn = page.locator("span.icon-add");
    }


    async clickAddBtn(){
       await this.addBtn.isVisible();
       await this.addBtn.click();
    }

}