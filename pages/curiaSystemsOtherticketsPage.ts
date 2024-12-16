import { Locator, Page, expect } from "@playwright/test";
import Base from "./base";

export default class curiaSystemsOtherTickets extends Base {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  selectors = {
    dataEntryField: '//*[@class="nav-link ng-tns-c253937500-5"]',
    otherTicketsField:
      "//a[@class='nav-link'][normalize-space()='Other Tickets']",
    typeSelectField: '//*[text()="1-POLICE STANDING"]',
    caseNumberField: "//input[@id='Number']",
    firstNameField: "(//input[@name='First'])[1]",
    miField: "//div[@class='col-7']//input[@name='MI']",
    lastNameField: "//div[@class='col-7']//input[@name='Last']",
    OpenDoBDropDownField: "(//span[@class='input-group-text'])[4]",
    SelectDateField:
      "//div[@class='btn-light ng-star-inserted'][normalize-space()='1']",
    suffixField: "//input[@name='Suffix']",
    sexField: '//select[@name="Sex"]',
    addressField: "//div[@class='col-sm-8']//input[@name='Address']",
    address2Field: "//div[@class='col-sm-8']//input[@name='Address']",
    zipField: "//input[@name='OffenderZip']",
    phoneField: "//div[@class='col-sm-8']//input[@name='Phone']",
    emailField: "//input[@name='OffenderEmail']",
    regNoField: '//input[@name="RegNo"]',
    plateTypeDropdown: '(//*[@class="ng-select-container ng-has-value"])[3]',
    plateTypeOption: '//*[text()=" 1-PASSENGER"]',
    makeDropdown: '(//*[@class="ng-select-container ng-has-value"])[4]',
    makeOption: '(//*[@class="ng-option-label ng-star-inserted"])[6]',
    yearField: "//input[@name='VehicleYear']",
    colorDropdown: '(//*[@class="ng-select-container ng-has-value"])[5]',
    colorOption: '(//*[@class="ng-option-label ng-star-inserted"])[4]',
    vinField: "//input[@name='Vin']",
    copyOffenderInfoButton: "//b[normalize-space()='Copy Offender Info']",
    crNoField: '//input[@name="CRNO"]',
    ticketDateField:
      "//div[@class='col-md-4 mb-1 row']//span[@class='input-group-text']",
    locationDropdown:
      "//ng-select[@name='location']//span[@class='ng-arrow-wrapper']",
    locationOption: '(//*[@class="ng-option ng-star-inserted"])[2]',
    licenseNoField: '//input[@name="OffenderLicenseNo"]',
    stateDropdown1:
      "//ng-select[@name='OffenderLicenseState']//span[@class='ng-arrow-wrapper']",
    stateOption1: '(//*[@class="ng-option ng-star-inserted"])[3]',
    codeDropdown: "//td[@class='text-center']//button[@type='button']",
    codeOption: ".dropdown-menu.tblscrl.show tbody tr:first-child",
    saveViolationButton: '//i[@title="Add Violation"]',
    officerDropdown: "//ng-select[@name='Officer']//span[@class='ng-arrow']",
    officerOption: '//span[normalize-space()="344-LINDSAY-ROBERT"]',
    meterField: '//input[@name="Meter"]',
    user1Field: '//input[@name="User1"]',
    saveCloseButton: '//b[normalize-space()="Save & Close"]',
    ticketAddedField: "//div[text()='Ticket added.']",
    oKBtnField: "button[class='swal2-confirm swal2-styled']",
    caseSearchField: "//span[normalize-space(text())='Case Search']",
    browseCasesField: "//a[normalize-space()='Browse Cases']",
    searchField: "//b[normalize-space()='Search']",
  };

  get dataEntry(): Locator {
    return this.page.locator(this.selectors.dataEntryField);
  }
  get otherTickets(): Locator {
    return this.page.locator(this.selectors.otherTicketsField);
  }
  get typeSelectField(): Locator {
    return this.page.locator(this.selectors.typeSelectField);
  }
  get caseNumberInputField(): Locator {
    return this.page.locator(this.selectors.caseNumberField);
  }
  get firstNameInputField(): Locator {
    return this.page.locator(this.selectors.firstNameField);
  }
  get lastNameInputField(): Locator {
    return this.page.locator(this.selectors.lastNameField);
  }
  get miInputField(): Locator {
    return this.page.locator(this.selectors.miField);
  }
  get OpenDoBDropDown(): Locator {
    return this.page.locator(this.selectors.OpenDoBDropDownField);
  }
  get SelectDate(): Locator {
    return this.page.locator(this.selectors.SelectDateField);
  }
  get suffixInputField(): Locator {
    return this.page.locator(this.selectors.suffixField);
  }
  get sexInputField(): Locator {
    return this.page.locator(this.selectors.sexField);
  }
  get addressInputField(): Locator {
    return this.page.locator(this.selectors.addressField);
  }
  get address2InputField(): Locator {
    return this.page.locator(this.selectors.address2Field);
  }
  get zipInputField(): Locator {
    return this.page.locator(this.selectors.zipField);
  }
  get phoneInputField(): Locator {
    return this.page.locator(this.selectors.phoneField);
  }
  get emailInputField(): Locator {
    return this.page.locator(this.selectors.emailField);
  }
  get regNoInputField(): Locator {
    return this.page.locator(this.selectors.regNoField);
  }
  get plateTypeDropdownField(): Locator {
    return this.page.locator(this.selectors.plateTypeDropdown);
  }
  get plateTypeOptionField(): Locator {
    return this.page.locator(this.selectors.plateTypeOption);
  }
  get makeDropdownField(): Locator {
    return this.page.locator(this.selectors.makeDropdown);
  }
  get makeOptionField(): Locator {
    return this.page.locator(this.selectors.makeOption);
  }
  get yearInputField(): Locator {
    return this.page.locator(this.selectors.yearField);
  }
  get colorDropdownField(): Locator {
    return this.page.locator(this.selectors.colorDropdown);
  }
  get colorOptionField(): Locator {
    return this.page.locator(this.selectors.colorOption);
  }
  get vinInputField(): Locator {
    return this.page.locator(this.selectors.vinField);
  }
  get copyOffenderInfoButtonField(): Locator {
    return this.page.locator(this.selectors.copyOffenderInfoButton);
  }
  get crNoInputField(): Locator {
    return this.page.locator(this.selectors.crNoField);
  }
  get ticketDate(): Locator {
    return this.page.locator(this.selectors.ticketDateField);
  }
  get locationDropdownField(): Locator {
    return this.page.locator(this.selectors.locationDropdown);
  }
  get locationOptionField(): Locator {
    return this.page.locator(this.selectors.locationOption);
  }
  get licenseNoInputField(): Locator {
    return this.page.locator(this.selectors.licenseNoField);
  }
  get stateDropdown1Field(): Locator {
    return this.page.locator(this.selectors.stateDropdown1);
  }
  get stateOption1Field(): Locator {
    return this.page.locator(this.selectors.stateOption1);
  }
  get codeDropdownField(): Locator {
    return this.page.locator(this.selectors.codeDropdown);
  }
  get codeOptionField(): Locator {
    return this.page.locator(this.selectors.codeOption);
  }
  get saveViolationButtonField(): Locator {
    return this.page.locator(this.selectors.saveViolationButton);
  }
  get officerDropdownField(): Locator {
    return this.page.locator(this.selectors.officerDropdown);
  }
  get officerOptionField(): Locator {
    return this.page.locator(this.selectors.officerOption);
  }
  get meterInputField(): Locator {
    return this.page.locator(this.selectors.meterField);
  }
  get user1InputField(): Locator {
    return this.page.locator(this.selectors.user1Field);
  }
  get saveCloseButtonField(): Locator {
    return this.page.locator(this.selectors.saveCloseButton);
  }
  get checkTicketAdded(): Locator {
    return this.page.locator(this.selectors.ticketAddedField);
  }
  get okBtn(): Locator {
    return this.page.locator(this.selectors.oKBtnField);
  }
  get caseSearch(): Locator {
    return this.page.locator(this.selectors.caseSearchField);
  }
  get browseCases(): Locator {
    return this.page.locator(this.selectors.browseCasesField);
  }
  get search(): Locator {
    return this.page.locator(this.selectors.searchField);
  }

  async clickDataEntry(): Promise<void> {
    await expect(this.dataEntry).toBeVisible();
    await this.dataEntry.click();
  }

  async clickOtherTickets(): Promise<void> {
    await expect(this.otherTickets).toBeVisible();
    await this.otherTickets.click();
  }

  async selectPoliceStanding(): Promise<void> {
    await this.typeSelectField.click();
  }

  async fillCaseNumber(caseNumber: string): Promise<void> {
    await expect(this.caseNumberInputField).toBeVisible();
    await this.caseNumberInputField.click();
    await this.caseNumberInputField.fill(caseNumber);
  }

  async fillFirstName(firstName: string): Promise<void> {
    const field = this.page.locator(this.selectors.firstNameField);
    await expect(field).toBeVisible();
    await field.fill(firstName);
    await expect(field).toHaveValue(firstName);
  }

  async fillmiField(miField2: string): Promise<void> {
    const field = this.page.locator(this.selectors.miField);
    await expect(field).toBeVisible();
    await field.fill(miField2);
    await expect(field).toHaveValue(miField2);
  }

  async fillLastName(lastName: string): Promise<void> {
    const field = this.page.locator(this.selectors.lastNameField);
    await expect(field).toBeVisible();
    await field.fill(lastName);
    await expect(field).toHaveValue(lastName);
  }

  async selectDate(): Promise<void> {
    await this.OpenDoBDropDown.click();
    await this.page.waitForTimeout(500);
    await this.SelectDate.click();
  }

  async fillSuffix(suffix: string): Promise<void> {
    const field = this.page.locator(this.selectors.suffixField);
    await expect(field).toBeVisible();
    await field.fill(suffix);
    await expect(field).toHaveValue(suffix);
  }

  async fillSex(sex: string): Promise<void> {
    const field = this.page.locator(this.selectors.sexField);
    await expect(field).toBeVisible();
    await field.fill(sex);
    await expect(field).toHaveValue(sex);
  }

  async fillAddress(address: string): Promise<void> {
    const field = this.page.locator(this.selectors.addressField);
    await expect(field).toBeVisible();
    await field.fill(address);
    await expect(field).toHaveValue(address);
  }

  async fillAddress2(address2: string): Promise<void> {
    const field = this.page.locator(this.selectors.address2Field);
    await expect(field).toBeVisible();
    await field.fill(address2);
    await expect(field).toHaveValue(address2);
  }

  async fillZip(zip: string): Promise<void> {
    const field = this.page.locator(this.selectors.zipField);
    await expect(field).toBeVisible();
    await field.fill(zip);
    await expect(field).toHaveValue(zip);
  }

  async fillPhone(phone: string): Promise<void> {
    const field = this.page.locator(this.selectors.phoneField);
    await expect(field).toBeVisible();
    await field.fill(phone);
    await expect(field).toHaveValue(phone);
  }

  async fillEmail(email: string): Promise<void> {
    const field = this.page.locator(this.selectors.emailField);
    await expect(field).toBeVisible();
    await field.fill(email);
    await expect(field).toHaveValue(email);
  }

  async fillRegNo(regNo: string): Promise<void> {
    const field = this.page.locator(this.selectors.regNoField);
    await expect(field).toBeVisible();
    await field.fill(regNo);
    await expect(field).toHaveValue(regNo);
  }

  async selectPlateType(): Promise<void> {
    await this.plateTypeDropdownField.click();
    await this.plateTypeOptionField.click();
  }

  async selectMake(): Promise<void> {
    await this.makeDropdownField.click();
    await this.makeOptionField.click();
  }

  async fillYear(year: string): Promise<void> {
    const field = this.page.locator(this.selectors.yearField);
    await expect(field).toBeVisible();
    await field.fill(year);
    await expect(field).toHaveValue(year);
  }

  async selectColor(): Promise<void> {
    await this.colorDropdownField.click();
    await this.colorOptionField.click();
  }

  async fillVin(vin: string): Promise<void> {
    const field = this.page.locator(this.selectors.vinField);
    await expect(field).toBeVisible();
    await field.fill(vin);
    await expect(field).toHaveValue(vin);
  }

  async clickCopyOffenderInfoButton(): Promise<void> {
    await expect(this.copyOffenderInfoButtonField).toBeVisible();
    await this.copyOffenderInfoButtonField.click();
  }

  async fillCrNo(crNo: string): Promise<void> {
    const field = this.page.locator(this.selectors.crNoField);
    await expect(field).toBeVisible();
    await field.fill(crNo);
    await expect(field).toHaveValue(crNo);
  }

  async selectTicketDate(): Promise<void> {
    await this.ticketDate.click();
    await this.SelectDate.click();
  }

  async selectLocation(): Promise<void> {
    await this.locationDropdownField.click();
    await this.locationOptionField.click();
  }

  async fillLicenseNo(licenseNo: string): Promise<void> {
    const field = this.page.locator(this.selectors.licenseNoField);
    await expect(field).toBeVisible();
    await field.fill(licenseNo);
    await expect(field).toHaveValue(licenseNo);
  }

  async selectState1(): Promise<void> {
    await this.stateDropdown1Field.click();
    await this.stateOption1Field.click();
  }

  async selectCode(): Promise<void> {
    await this.codeDropdownField.click();
    await this.codeOptionField.click();
  }

  async clickSaveViolationButton(): Promise<void> {
    await expect(this.saveViolationButtonField).toBeVisible();
    await this.saveViolationButtonField.click();
  }

  async selectOfficer(): Promise<void> {
    await this.officerDropdownField.click();
    await this.officerOptionField.click();
  }

  async fillMeter(meter: string): Promise<void> {
    const field = this.page.locator(this.selectors.meterField);
    await expect(field).toBeVisible();
    await field.fill(meter);
    await expect(field).toHaveValue(meter);
  }

  async fillUser1(user1: string): Promise<void> {
    const field = this.page.locator(this.selectors.user1Field);
    await expect(field).toBeVisible();
    await field.fill(user1);
    await expect(field).toHaveValue(user1);
  }

  async clickSaveCloseButton(): Promise<void> {
    await expect(this.saveCloseButtonField).toBeVisible();
    await this.saveCloseButtonField.click();
  }

  async verifyTicketAdded(): Promise<void> {
    await expect(this.checkTicketAdded).toBeVisible();
  }

  async clickOKButton(): Promise<void> {
    await expect(this.okBtn).toBeVisible();
    await this.okBtn.click();
  }

  async clickCaseSearch(): Promise<void> {
    await expect(this.caseSearch).toBeVisible();
    await this.caseSearch.click();
  }

  async clickBrowseCases(): Promise<void> {
    await expect(this.browseCases).toBeVisible();
    await this.browseCases.click();
  }

  async clickSearch(): Promise<void> {
    await this.page.waitForTimeout(3000);
    await expect(this.search).toBeVisible();
    await this.search.click();
  }

  async checkElementVisibilityByText(text: string): Promise<boolean> {
    const dynamicSelector = `//td[normalize-space()='${text}']`;
    await this.page.waitForTimeout(1000);
    const isVisible = await this.page.locator(dynamicSelector).isVisible();
    return isVisible;
  }
}
