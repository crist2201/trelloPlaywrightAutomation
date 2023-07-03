import { test, expect, Page } from "@playwright/test";
import { BoardsPage } from "../src/pages/BoardsPage";
import { CreateMenuPage } from "../src/pages/CreateMenuPage";
import { CreateBoardPage } from "../src/pages/CreateBoardPage";
import { BoardPage } from "../src/pages/BoardPage";
import { Login } from "../src/pages/Login";
import { HomePage } from "../src/pages/HomePage";
import config from "../testConfig.json";

test.describe("Board Tests", () => {

    let homePage: HomePage;
    let boardsPage: BoardsPage;
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
        boardsPage = new BoardsPage(page)
        menuCreatePage = new CreateMenuPage(page);
        createBoardPage = new CreateBoardPage(page);
        boardPage = new BoardPage(page);
        page.goto(url);
    })

    test.beforeEach(async() =>{
        !await homePage.isLoggedIn() && await homePage.goTologin(email, password);
       // await homePage.goTologin(email, password); 
    })
    
    test("Create board from top menu", async () => {
        await boardsPage.clickCreateBtn();
        await menuCreatePage.clickCreateBoardBtn();
        await createBoardPage.setBoardTitle(boardTitle);
        await createBoardPage.clickCreateBoardBtn();
        expect(await boardPage.getBoardTitle(), "Board title is not correct").toBe(boardTitle);
    })

})


