import { AutomationFormPage } from '../pageObjects/automationFormPage';

describe('test-site scenarios', () => {
  
  it('Fill Form', () => {
    // Expected Data mapped to table labels for dynamic validation
    const expectedData = {
      'Student Name': 'John Doe',
      'Student Email': 'john.doe@example.com',
      'Gender': 'Male',
      'Mobile': '1234567890',
      'Date of Birth': '28 February,1930',
      'Subjects': 'Economics',
      'Hobbies': 'Music',
      'Picture': 'test-image.jpg',
      'Address': '123 Test Boulevard',
      'State and City': 'NCR Delhi'
    };

    // a. Open https://demoqa.com/automation-practice-form
    AutomationFormPage.visit();

    // b. Input all the necessary information
    AutomationFormPage.firstName.type('John');
    AutomationFormPage.lastName.type('Doe');
    AutomationFormPage.userEmail.type('john.doe@example.com');
    AutomationFormPage.genderMale.click();
    AutomationFormPage.userNumber.type('1234567890');
    AutomationFormPage.currentAddress.type('123 Test Boulevard');

    // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
    AutomationFormPage.setDateOfBirth('28', 'February', '1930');

    // d. Set Subjects to Economics.
    // Type economics and hit enter to trigger the auto-complete tag
    AutomationFormPage.subjectsInput.type('Economics{enter}');

    // e. Set Hobbies to Music.
    AutomationFormPage.hobbiesMusic.click();

    // f. Upload an image of your choice. 
    // i. Expected path: cypress/fixtures/files/test-image.jpg
    AutomationFormPage.uploadPictureInput.selectFile('cypress/fixtures/files/test-image.jpg');

    // g. Set State to NCR.
    AutomationFormPage.selectState('NCR');

    // h. Set City to Delhi.
    AutomationFormPage.selectCity('Delhi');

    // i. Click Submit.
    // We use {force: true} because DemoQA frequently serves bottom-banner ads that cover the submit button
    AutomationFormPage.submitButton.click({ force: true });

    // j. Validate that each Labeled row contains the correct information.
    AutomationFormPage.resultsTableRows.each(($row) => {
      // Extract the label from the first column and the value from the second column
      const label = $row.find('td').eq(0).text().trim();
      const value = $row.find('td').eq(1).text().trim();
      
      // Assert that the value in the UI matches our expected data object
      expect(value).to.equal(expectedData[label]);
    });
  });
});