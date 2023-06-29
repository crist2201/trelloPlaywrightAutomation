import { test, expect } from "@playwright/test";
import { EmailLoginPage } from "../src/pages/loginTrelloEmailPage";
import { PasswordLoginPage } from "../src/pages/LoginTrelloPasswordPage";
import { BoardsPage } from "../src/pages/BoardsPage";
import * as util from "util"; 

/*test.describe("Login Test", () => {

    let loginEmailPage : EmailLoginPage;
    let loginPasswordPage: PasswordLoginPage;
    let boardsPage: BoardsPage;

    let email = "cristiansalazar822@gmail.com"
    let password = "trello2023@"

    test.beforeAll(async ({ browser }) =>{
        const page = await browser.newPage();
        loginEmailPage = new EmailLoginPage(page);
        loginPasswordPage = new PasswordLoginPage(page);
        boardsPage = new BoardsPage(page)
        await page.goto("https://trello.com/login");
    })

    test.afterAll(async ({ browser }) => {
        await browser.close();
    })

    test("Login successfully", async () => {
        await loginEmailPage.setEmail(email);
        await loginEmailPage.clickButton();
        await loginPasswordPage.setPassword(password);
        await loginPasswordPage.clickLoginButton();
        await boardsPage.clickAccountBtn();
        await expect(await boardsPage.checkEmail(email), "Email was not found").toHaveText(email);
    })


    test("Login unsuccessfully", async () => {
        let ch = 'a';
        await loginEmailPage.setEmail(email);
        await loginEmailPage.clickButton();
        await loginPasswordPage.setPassword(util.format('%s%s',password,ch));
        await loginPasswordPage.clickLoginButton();
        await expect(await loginPasswordPage.isErrorFormPresent(), "Error form was not displayed").toBeVisible();
    })

})*/


