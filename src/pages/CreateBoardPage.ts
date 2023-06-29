import {Page, Locator} from '@playwright/test'

export class CreateBoardPage{

    private readonly page : Page;
    private readonly boardTitle: Locator;
    private readonly createBoardBtn: Locator;
    
    constructor(page: Page){
        this.page = page
        this.boardTitle = page.getByTestId("create-board-title-input");
        this.createBoardBtn = page.getByTestId("create-board-submit-button");
    }

    async setBoardTitle(boardTitle: string){
        await this.boardTitle.fill(boardTitle);
    }

    async clickCreateBoardBtn(){
        await this.createBoardBtn.click();
    }
    
}