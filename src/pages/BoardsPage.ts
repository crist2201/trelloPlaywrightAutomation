import {Page, Locator} from '@playwright/test' 
import { TopMenu } from '../components/TopMenu';

export class BoardsPage{

    private readonly page : Page;
    private topMenu : TopMenu;


    constructor(page: Page){
        this.page = page
        this.topMenu = new TopMenu(page);
    }


}