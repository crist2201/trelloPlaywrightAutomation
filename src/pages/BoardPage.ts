import {Page, Locator} from '@playwright/test'

export class BoardPage{

    private readonly page : Page;
    private readonly boardTitle: Locator;
    private readonly listName: Locator;
    private readonly addListBtn: Locator;
    
    constructor(page: Page){
        this.page = page
        this.boardTitle = page.getByTestId("board-name-display");
        this.listName = page.locator(".list-name-input");
        this.addListBtn = page.locator("[value = 'Add list']")
    }

    async getBoardTitle(){
        return await this.boardTitle.textContent();
    }

    async setListName(listName: string){
        await this.listName.fill(listName);
    }
    
    async clickAddListBtn(){
        await this.addListBtn.click();

    }
}