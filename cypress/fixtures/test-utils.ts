export function testBackground(backgroundColor: string, color: string) {
  cy.get('body').should('have.css', 'background-color', backgroundColor);
  cy.get('body').should('have.css', 'color', color);
  cy.get('.mat-app-background').should('have.css', 'background-color', backgroundColor);
  cy.get('.mat-app-background').should('have.css', 'color', color);
}

export function testMatCard(marCardBackgroundColor: string, matCardContentBackgroundColor: string) {
  cy.get('mat-card').should('have.css', 'background-color', marCardBackgroundColor);
  cy.get('mat-card-content').should('have.css', 'background-color', matCardContentBackgroundColor);
}

export function testMatButtonsBasic(
  labelColor: string,
  basicColor: string,
  primaryColor: string,
  accentColor: string,
  warnColor: string,
  backgroundColor: string,
  disabledColor: string,
) {
  cy.get('.example-label').eq(0).should('have.css', 'color', labelColor).should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(0)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', basicColor)
    .should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(1)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', primaryColor)
    .should('contain.text', 'Primary');
  cy.get('.example-button-row > button')
    .eq(2)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', accentColor)
    .should('contain.text', 'Accent');
  cy.get('.example-button-row > button')
    .eq(3)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', warnColor)
    .should('contain.text', 'Warn');
  cy.get('.example-button-row > button')
    .eq(4)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('.example-button-row > a')
    .eq(0)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', basicColor)
    .should('contain.text', 'Link');
}
