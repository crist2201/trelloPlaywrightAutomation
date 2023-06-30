import {Page, Locator} from '@playwright/test' 
 


export class WorkspacePage{

    private readonly page : Page;
    private readonly workspaceName: Locator;



    constructor(page: Page){
        this.page = page
        this.workspaceName = page.locator("h2.SiP6d2d_8FAAkC");
    }


    async getWorkspaceName(){
       return await this.workspaceName.textContent();
    }

}