import { BasePage } from './basePage';

export class AutomationFormPage extends BasePage {
  static get url() {
    return 'https://demoqa.com/automation-practice-form';
  }

  static visit() {
    cy.visit(this.url);
  }

  // --- Selectors ---
  
  // Text Inputs
  static get firstName() { return cy.get('#firstName'); }
  static get lastName() { return cy.get('#lastName'); }
  static get userEmail() { return cy.get('#userEmail'); }
  static get userNumber() { return cy.get('#userNumber'); }
  static get currentAddress() { return cy.get('#currentAddress'); }
  
  // Radio Buttons & Checkboxes (clicking labels usually works best on this site)
  static get genderMale() { return cy.get('label[for="gender-radio-1"]'); }
  static get hobbiesMusic() { return cy.get('label[for="hobbies-checkbox-3"]'); }
  
  // DatePicker Widget
  static get dobInput() { return cy.get('#dateOfBirthInput'); }
  static get dobMonthSelect() { return cy.get('.react-datepicker__month-select'); }
  static get dobYearSelect() { return cy.get('.react-datepicker__year-select'); }
  
  // Autocomplete / Dropdowns
  static get subjectsInput() { return cy.get('#subjectsInput'); }
  static get stateDropdown() { return cy.get('#state'); }
  static get cityDropdown() { return cy.get('#city'); }
  
  // File Upload & Submit
  static get uploadPictureInput() { return cy.get('#uploadPicture'); }
  static get submitButton() { return cy.get('#submit'); }

  // Validation Table
  static get resultsTableRows() { return cy.get('.table tbody tr'); }

  // --- Interaction Methods ---

  static setDateOfBirth(day, month, year) {
    this.dobInput.click();
    this.dobMonthSelect.select(month);
    this.dobYearSelect.select(year);
    // Dynamic selector to pick the exact day, ignoring days from the previous/next month rendered in the current view
    cy.get(`.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`).click();
  }

  static selectState(stateName) {
    this.stateDropdown.click();
    cy.get('[id^="react-select-3-option"]').contains(stateName).click();
  }

  static selectCity(cityName) {
    this.cityDropdown.click();
    cy.get('[id^="react-select-4-option"]').contains(cityName).click();
  }
}