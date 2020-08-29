const testName = Cypress.env('testName');

describe('Test App', () => {
  beforeEach(() =>{
    cy.visit(`/`);
  });

  it('Should display title and description', () => {
    cy.getByTestId('appTitle').should('be.visible');
    cy.getByTestId('appDescription').should('be.visible');
    cy.getByTestId('appDescription').should('have.text', 'Тестирование frontend');
  });

  it('Should show name', () => {
    cy.getByTestId('helloBlock').should('have.text', '');
    cy.getByTestId('appInput').type(testName);
    cy.getByTestId('helloBlock').should('have.text', `Привет, ${testName}`);
    cy.getByTestId('appInput').clear();
    cy.getByTestId('helloBlock').should('have.text', '');
  });

  it('Should open garage page', () => {
    cy.getByTestId('garageLink')
      .should('have.attr', 'href')
      .and('contain', 'https://school.xsolla.com/garage');

    cy.getByTestId('garageLink').click();
  });
});
