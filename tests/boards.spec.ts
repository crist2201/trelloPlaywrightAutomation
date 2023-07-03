import { test, expect } from "@playwright/test";
import { CreateMenuPage } from "../src/pages/CreateMenuPage";
import { CreateBoardPage } from "../src/pages/CreateBoardPage";
import { BoardPage } from "../src/pages/BoardPage";
import { HomePage } from "../src/pages/HomePage";
import { TopMenu } from "../src/components/TopMenu";
import config from "../testConfig.json";

test.describe("Board Tests", () => {

    let homePage: HomePage;
    let topMenu: TopMenu;
    let menuCreatePage: CreateMenuPage;
    let createBoardPage: CreateBoardPage;
    let boardPage: BoardPage;

    let url = config.url
    let email = config.credentials.email;
    let password = config.credentials.password;
    let boardTitle = "Board Playwright";


    test.beforeAll(async ({ browser }) =>{
        const page = await browser.newPage();
        homePage = new HomePage(page);
        topMenu = new TopMenu(page)
        menuCreatePage = new CreateMenuPage(page);
        createBoardPage = new CreateBoardPage(page);
        boardPage = new BoardPage(page);
        page.goto(url);
    })

    test.beforeEach(async() =>{
        !await homePage.isLoggedIn() && await homePage.goTologin(email, password);
    })
    
    test("Create board from top menu @sanity", async () => {
        await topMenu.clickCreateBtn();
        await menuCreatePage.clickCreateBoardBtn();
        await createBoardPage.setBoardTitle(boardTitle);
        await createBoardPage.clickCreateBoardBtn();
        expect(await boardPage.getBoardTitle(), "Board title is not correct").toBe(boardTitle);
    })



})


