describe('example-theme-app: dark theme', () => {
  beforeEach(() => {
    cy.wrap(
      Cypress.automation('remote:debugger:protocol', {
        command: 'Emulation.setEmulatedMedia',
        params: {
          media: 'page',
          features: [
            {
              name: 'prefers-color-scheme',
              value: 'dark',
            },
          ],
        },
      }),
    );
    cy.visit('/');
  });

  it('Background should have theme colors', () => {
    cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('body').should('have.css', 'color', 'rgb(255, 255, 255)');
    cy.get('.mat-app-background').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('.mat-app-background').should('have.css', 'color', 'rgb(255, 255, 255)');
  });

  it('Mat Card should have theme colors', () => {
    cy.get('mat-card').should('have.css', 'background-color', 'rgb(66, 66, 66)');
    cy.get('mat-card-content').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });

  it('Basic Buttons should have theme colors', () => {
    cy.get('.example-label').eq(0).should('have.css', 'color', 'rgb(255, 255, 255)').should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(0)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(4)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.5)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(0)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Link');
  });

  it('Flat Buttons should have theme colors', () => {
    cy.get('.example-label').eq(3).should('have.css', 'color', 'rgb(255, 255, 255)').should('contain.text', 'Flat');
    cy.get('.example-button-row > button')
      .eq(15)
      .should('have.css', 'background-color', 'rgb(66, 66, 66)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(19)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.12)')
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.5)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(3)
      .should('have.css', 'background-color', 'rgb(66, 66, 66)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Link');
  });

  it('Extended FAB Buttons should have theme colors', () => {
    cy.get('.example-label')
      .eq(7)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Extended Fab');
    cy.get('.example-button-container > button')
      .eq(8)
      .should('have.css', 'background-color', 'rgb(0, 75, 114)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Basic');
    cy.get('.example-button-container > button')
      .eq(12)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.12)')
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.5)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-container > a')
      .should('have.css', 'background-color', 'rgb(0, 75, 114)')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Link');
  });

  it('Inputs should have theme colors', () => {
    cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', 'rgba(255, 255, 255, 0.6)');
    cy.get('input').eq(0).click();
    cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', 'rgba(145, 205, 255, 0.87)');
  });
});
