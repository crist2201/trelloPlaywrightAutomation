import { test, expect } from "@playwright/test";
import { BoardsPage } from "../src/pages/BoardsPage";
import { CreateMenuPage } from "../src/pages/CreateMenuPage";
import { CreateBoardPage } from "../src/pages/CreateBoardPage";
import { BoardPage } from "../src/pages/BoardPage";
import { Login } from "../src/pages/Login";

test.describe("Board Tests", () => {

    //let loginEmailPage : EmailLoginPage;
    //let loginPasswordPage: PasswordLoginPage;
    let login: Login;
    let boardsPage: BoardsPage;
    let menuCreatePage: CreateMenuPage;
    let createBoardPage: CreateBoardPage;
    let boardPage: BoardPage;

    let url = "https://trello.com/login";
    let email = "cristiansalazar822@gmail.com";
    let password = "trello2023@";
    let boardTitle = "Board Playwright";

    test.beforeAll(async ({ browser }) =>{
        const page = await browser.newPage();
        login = new Login(page);
        boardsPage = new BoardsPage(page)
        menuCreatePage = new CreateMenuPage(page);
        createBoardPage = new CreateBoardPage(page);
        boardPage = new BoardPage(page);
        page.goto(url);
    })

    test.beforeEach(async() =>{
        await login.login(email, password);
    })
    
    test("Create board from top menu", async () => {
        await boardsPage.clickCreateBtn();
        await menuCreatePage.clickCreateBoardBtn();
        await createBoardPage.setBoardTitle(boardTitle);
        await createBoardPage.clickCreateBoardBtn();
        expect(await boardPage.getBoardTitle(), "Board title is not correct").toBe(boardTitle);
    })

})


