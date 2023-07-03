import { test, expect } from "@playwright/test";
import { Login } from "../src/pages/Login";
import { CreateWorkspacePage } from "../src/pages/CreateWorkspacePage";
import { WorkspacePage } from "../src/pages/WorkspacePage";
import { SideBar } from "../src/components/SideBar";
import { HomePage } from "../src/pages/HomePage";
import { TopMenu } from "../src/components/TopMenu";
import config from "../testConfig.json";
import * as util from "util"; 

test.describe("Login Test", () => {

    let login: Login;
    let topMenu: TopMenu;
    let homePage: HomePage;
    let url = config.url
    let email = config.credentials.email;
    let password = config.credentials.password;

    test.beforeAll(async ({ browser }) =>{
        const page = await browser.newPage();
        login = new Login(page);
        topMenu = new TopMenu(page);
        homePage = new HomePage(page);
        page.goto(url);
    })

    test.beforeEach(async() =>{
        !await homePage.isLoggedIn() && await homePage.goTologin(email, password); 
    })

    test("Login successfully", async () => {
        await expect(await topMenu.checkEmail(email), "Email was not found").toHaveText(email);
    })


})


