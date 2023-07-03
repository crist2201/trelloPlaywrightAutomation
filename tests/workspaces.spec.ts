import { test, expect } from "@playwright/test";
import { BoardsPage } from "../src/pages/BoardsPage";
import { CreateMenuPage } from "../src/pages/CreateMenuPage";
import { CreateWorkspacePage } from "../src/pages/CreateWorkspacePage";
import { WorkspacePage } from "../src/pages/WorkspacePage";
import { SideBar } from "../src/components/SideBar";
import config from "../testConfig.json";
import { HomePage } from "../src/pages/HomePage";
import { TopMenu } from "../src/components/TopMenu";

test.describe("Workspace Tests", () => {

    let homePage: HomePage;
    let topMenu: TopMenu;
    let menuCreatePage: CreateMenuPage;
    let workspaceCreatePage: CreateWorkspacePage;
    let workspacePage: WorkspacePage;
    let sideBar: SideBar;

    let url = config.url
    let email = config.credentials.email;
    let password = config.credentials.password;
    let workspaceName = "Workspace Playwright 1";
    let workspaceType = "Education";

    test.beforeAll(async ({ browser }) =>{
        const page = await browser.newPage();
        homePage = new HomePage(page);
        topMenu = new TopMenu(page);
        menuCreatePage = new CreateMenuPage(page);
        sideBar = new SideBar(page);
        workspaceCreatePage = new CreateWorkspacePage(page);
        workspacePage = new WorkspacePage(page);
        page.goto(url);
    })

    test.beforeEach(async() =>{
        !await homePage.isLoggedIn() && await homePage.goTologin(email, password); 
    })
    
    test("Create workspace from top menu @sanity", async () => {
        await topMenu.clickCreateBtn();
        await menuCreatePage.clickCreateWorkspaceBtn()
        await workspaceCreatePage.setWorkspaceName(workspaceName);
        await workspaceCreatePage.setWorkspaceType(workspaceType);
        await workspaceCreatePage.clickContinueBtn();
        await workspaceCreatePage.clickDoThisLaterBtn();
        expect(await workspacePage.getWorkspaceName(), "Workspace name is not correct").toBe(workspaceName);
    })


    test("Create workspace from sidebar menu", async () => {
        await sideBar.clickAddBtn();
        await workspaceCreatePage.setWorkspaceName(workspaceName);
        await workspaceCreatePage.setWorkspaceType(workspaceType);
        await workspaceCreatePage.clickContinueBtn();
        await workspaceCreatePage.clickDoThisLaterBtn();
        expect(await workspacePage.getWorkspaceName(), "Workspace name is not correct").toBe(workspaceName);
    })

})


