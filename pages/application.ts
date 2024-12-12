import { Page } from '@playwright/test';
import { data } from '../support/data';
import curiaSystemsLoginPage from './curiaSystemsLoginPage';

export default class Application {
    protected page: Page;
    CuriaSystmesLoginPage: curiaSystemsLoginPage;    

    

    constructor(page: Page) {
        this.page = page; 
        this.CuriaSystmesLoginPage = new curiaSystemsLoginPage(page);      
   
    }
}
