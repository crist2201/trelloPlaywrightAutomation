import {Page, Locator} from '@playwright/test' 

export class CreateMenuPage{

    private readonly page : Page;
    private readonly boardBtn: Locator;
    private readonly workspaceBtn: Locator;

    constructor(page: Page){
        this.page = page
        this.boardBtn = page.getByTestId("header-create-board-button");
        this.workspaceBtn = page.getByTestId("header-create-team-button");
    }


    async clickCreateBoardBtn(){
        await this.boardBtn.click();
    }

    async clickCreateWorkspaceBtn(){
        await this.workspaceBtn.click();
    }

}