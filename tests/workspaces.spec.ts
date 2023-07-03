import { test, expect } from "@playwright/test";
import { BoardsPage } from "../src/pages/BoardsPage";
import { CreateMenuPage } from "../src/pages/CreateMenuPage";
import { CreateWorkspacePage } from "../src/pages/CreateWorkspacePage";
import { WorkspacePage } from "../src/pages/WorkspacePage";
import { SidebarPage } from "../src/pages/SidebarPage";
import config from "../testConfig.json";
import { HomePage } from "../src/pages/HomePage";

test.describe("Workspace Tests", () => {

    let homePage: HomePage;
    let boardsPage: BoardsPage;
    let menuCreatePage: CreateMenuPage;
    let workspaceCreatePage: CreateWorkspacePage;
    let workspacePage: WorkspacePage;
    let sidebarPage: SidebarPage;

    let url = config.url
    let email = config.credentials.email;
    let password = config.credentials.password;
    let workspaceName = "Workspace Playwright 1";
    let workspaceType = "Education";

    test.beforeAll(async ({ browser }) =>{
        const page = await browser.newPage();
        homePage = new HomePage(page);
        boardsPage = new BoardsPage(page)
        menuCreatePage = new CreateMenuPage(page);
        sidebarPage = new SidebarPage(page);
        workspaceCreatePage = new CreateWorkspacePage(page);
        workspacePage = new WorkspacePage(page);
        page.goto(url);
    })

    test.beforeEach(async() =>{
        !await homePage.isLoggedIn() && await homePage.goTologin(email, password); 
    })
    
    test("Create workspace from top menu", async () => {
        await boardsPage.clickCreateBtn();
        await menuCreatePage.clickCreateWorkspaceBtn()
        await workspaceCreatePage.setWorkspaceName(workspaceName);
        await workspaceCreatePage.setWorkspaceType(workspaceType);
        await workspaceCreatePage.clickContinueBtn();
        await workspaceCreatePage.clickDoThisLaterBtn();
        expect(await workspacePage.getWorkspaceName(), "Workspace name is not correct").toBe(workspaceName);
    })


    test("Create workspace from sidebar menu", async () => {
        await sidebarPage.clickAddBtn();
        await workspaceCreatePage.setWorkspaceName(workspaceName);
        await workspaceCreatePage.setWorkspaceType(workspaceType);
        await workspaceCreatePage.clickContinueBtn();
        await workspaceCreatePage.clickDoThisLaterBtn();
        expect(await workspacePage.getWorkspaceName(), "Workspace name is not correct").toBe(workspaceName);
    })

})


