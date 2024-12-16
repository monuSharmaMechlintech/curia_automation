import {
  Browser,
  BrowserContext,
  chromium,
  expect,
  Page,
  test,
} from "@playwright/test";
import Application from "../pages/application";
import { data } from "../support/data";
import {
  generateRandomString,
  generateRandomZipCode,
  generateRandomYear,
  generateRandomNumberOfDigits,
} from "../support/utilites"
import fs from "fs";

let browser: Browser;
let context: BrowserContext;
let page: Page;
let App: Application;

// Constants for Test
const otherTicketCaseNumber = generateRandomNumberOfDigits(6);
const Firstname = generateRandomString(6);
const Lastname = generateRandomString(6);
const MIname = generateRandomString(1);
const Address = generateRandomString(12);
const Vin = generateRandomString(8);
const CRnumber = generateRandomString(8);
const License = generateRandomString(8);
const Zip = generateRandomZipCode();
const Year = generateRandomYear();


// Storing data to use in the next test
if (fs.existsSync("generatedData.json")) {
  const existingData = JSON.parse(
    fs.readFileSync("generatedData.json", "utf-8")
  );
  existingData.otherTicketCaseNumber = otherTicketCaseNumber; // Add or update the number

  // Write the updated data back to the file
  fs.writeFileSync("generatedData.json", JSON.stringify(existingData, null, 2));
} else {
  // If the file doesn't exist, create it
  fs.writeFileSync("generatedData.json", JSON.stringify({ otherTicketCaseNumber }, null, 2));
}


test.beforeAll(async () => {
  browser = await chromium.launch();
});

test.beforeEach(async () => {
  context = await browser.newContext();
  page = await context.newPage();
  App = new Application(page);
  await page.goto("/jcms/login");
  await App.CuriaSystmesLoginPage.signIn(data.signInData.municipality, data.signInData.username , data.signInData.password) 
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL('/jcms/home');                                                         
});

test.afterEach(async () => {
  await page.close();
  await context.close();
});

test.afterAll(async () => {
  await browser.close();
});

test("Verify User Should Be Able To Create The Other Tickets", async () => {
  // Step 1: Login
  // await expect(
  //   page.getByRole("heading", { name: "Signin", exact: true })
  // ).toBeVisible();
  // await expect(App.CuriaSystmesLoginPage.municipalityInputField).toBeVisible();
  // await App.CuriaSystmesLoginPage.selectValidMunicipalityName(
  //   data.signInData.municipality
  // );
  // await App.CuriaSystmesLoginPage.enterUsername(data.signInData.username);
  // await App.CuriaSystmesLoginPage.enterPassword(data.signInData.password);
  // await App.CuriaSystmesLoginPage.clickOnSignInButton();
  // await page.waitForTimeout(5000);

  // Step 2: Navigate to Other Tickets and Fill Form
  await App.CuriaSystemsOtherticketsPage.clickDataEntry();
  await App.CuriaSystemsOtherticketsPage.clickOtherTickets();
  await App.CuriaSystemsOtherticketsPage.selectPoliceStanding();
  await App.CuriaSystemsOtherticketsPage.fillCaseNumber(otherTicketCaseNumber);
  await App.CuriaSystemsOtherticketsPage.fillFirstName(Firstname);
  await App.CuriaSystemsOtherticketsPage.fillLastName(Lastname);
  await App.CuriaSystemsOtherticketsPage.selectDate();
  await App.CuriaSystemsOtherticketsPage.fillmiField(MIname);
  await App.CuriaSystemsOtherticketsPage.fillAddress(Address);
  await App.CuriaSystemsOtherticketsPage.fillZip(Zip);
  await App.CuriaSystemsOtherticketsPage.fillYear(Year);
  await App.CuriaSystemsOtherticketsPage.fillVin(Vin);

  // Step 3: Additional Details
  await App.CuriaSystemsOtherticketsPage.clickSaveCloseButton();

  // Step 4: Second part of the ticket form
  await App.CuriaSystemsOtherticketsPage.fillCrNo(CRnumber);
  await App.CuriaSystemsOtherticketsPage.selectTicketDate();
  await App.CuriaSystemsOtherticketsPage.selectLocation();
  await App.CuriaSystemsOtherticketsPage.fillLicenseNo(License);
  await App.CuriaSystemsOtherticketsPage.selectState1();
  await App.CuriaSystemsOtherticketsPage.selectCode();
  await App.CuriaSystemsOtherticketsPage.clickSaveViolationButton();

  // Step 5: Finalize and Verify
  await App.CuriaSystemsOtherticketsPage.clickSaveCloseButton();
  await App.CuriaSystemsOtherticketsPage.verifyTicketAdded();
  await App.CuriaSystemsOtherticketsPage.clickOKButton();
  await page.waitForTimeout(1000);
  await App.CuriaSystemsOtherticketsPage.clickSearch();
  await page.waitForTimeout(2000);
  await App.CuriaSystemsOtherticketsPage.checkElementVisibilityByText(License);
});
