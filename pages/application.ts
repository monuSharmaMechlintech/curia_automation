import { Page } from "@playwright/test";
import curiaSystemsLoginPage from "./curiaSystemsLoginPage";
import curiaSystemsOtherticketsPage from "./curiaSystemsOtherticketsPage";

export default class Application {
  protected page: Page;
  CuriaSystmesLoginPage: curiaSystemsLoginPage;
  CuriaSystemsOtherticketsPage: curiaSystemsOtherticketsPage;

  constructor(page: Page) {
    this.page = page;
    this.CuriaSystmesLoginPage = new curiaSystemsLoginPage(page);
    this.CuriaSystemsOtherticketsPage = new curiaSystemsOtherticketsPage(page);
     
  }
}
