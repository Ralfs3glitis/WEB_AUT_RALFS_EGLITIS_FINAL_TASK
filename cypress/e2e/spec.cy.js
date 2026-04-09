import { AutomationFormPage } from '../pageObjects/automationFormPage';

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe('test-site scenarios', () => {
  it('Fill Form', () => {
  // a. Open https://demoqa.com/automation-practice-form
  // b. Input all the necessary information in the text fields, buttons, etc, where it is not
  // stated otherwise.
  // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
  // d. Set Subjects to Economics.
  // e. Set Hobbies to Music.
  // f. Upload an image of your choice.
  // i. Create folder “files” and put the image there
  // ii. Might come in handy: https://docs.cypress.io/api/commands/selectfile
  // g. Set State to NCR.
  // h. Set City to Delhi.
  // i. Click Submit.
  // j. Validate that each Labeled row contains the correct information.
  // k. Create the necessary elements, page objects, etc.
  // l. Do as much as you can, the best way you can.
  });
});