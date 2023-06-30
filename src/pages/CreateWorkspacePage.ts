import {Page, Locator} from '@playwright/test' 
import * as util from "util";  


export class CreateWorkspacePage{

    private readonly page : Page;
    private readonly workspaceName: Locator;
    private readonly workspaceType: Locator;
    private readonly continueBtn: Locator;
    private readonly laterBtn: Locator;



    constructor(page: Page){
        this.page = page
        this.workspaceName = page.getByTestId("header-create-team-name-input");
        this.workspaceType = page.getByTestId("header-create-team-type-input");
        this.continueBtn = page.getByTestId("header-create-team-submit-button");
        this.laterBtn = page.getByTestId("show-later-button");
    }


    async setWorkspaceName(name:string){
        await this.workspaceName.fill(name);
    }

    async setWorkspaceType(type:string){
        await this.workspaceType.click();
        await this.page.locator(`//li[contains(.,'${type}')]`).click()
    }

    async clickContinueBtn(){
        await this.continueBtn.click()
    }

    async clickDoThisLaterBtn(){
        await this.laterBtn.click()
    }

}