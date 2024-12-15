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
      .eq(1)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(145, 205, 255)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(2)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(249, 187, 115)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(3)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(255, 180, 171)')
      .should('contain.text', 'Warn');
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

  it('Raised Buttons should have theme colors', () => {
    cy.get('.example-label').eq(1).should('have.css', 'color', 'rgb(255, 255, 255)').should('contain.text', 'Raised');
    cy.get('.example-button-row > button')
      .eq(5)
      .should('have.css', 'background-color', 'rgb(16, 20, 23)')
      .should('have.css', 'color', 'rgb(145, 205, 255)')
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(6)
      .should('have.css', 'background-color', 'rgb(16, 20, 23)')
      .should('have.css', 'color', 'rgb(145, 205, 255)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(7)
      .should('have.css', 'background-color', 'rgb(16, 20, 23)')
      .should('have.css', 'color', 'rgb(249, 187, 115)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(8)
      .should('have.css', 'background-color', 'rgb(16, 20, 23)')
      .should('have.css', 'color', 'rgb(255, 180, 171)')
      .should('contain.text', 'Warn');
    cy.get('.example-button-row > button')
      .eq(9)
      .should('have.css', 'background-color', 'color(srgb 0.878431 0.886275 0.905882 / 0.12)')
      .should('have.css', 'color', 'color(srgb 0.878431 0.886275 0.905882 / 0.38)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(1)
      .should('have.css', 'background-color', 'rgb(16, 20, 23)')
      .should('have.css', 'color', 'rgb(145, 205, 255)')
      .should('contain.text', 'Link');
  });

  it('Stroked Buttons should have theme colors', () => {
    cy.get('.example-label').eq(2).should('have.css', 'color', 'rgb(255, 255, 255)').should('contain.text', 'Stroked');
    cy.get('.example-button-row > button')
      .eq(10)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(145, 205, 255)')
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(11)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(145, 205, 255)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(12)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(249, 187, 115)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(13)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(255, 180, 171)')
      .should('contain.text', 'Warn');
    cy.get('.example-button-row > button')
      .eq(14)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'color(srgb 0.878431 0.886275 0.905882 / 0.38)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(2)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(145, 205, 255)')
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
      .eq(16)
      .should('have.css', 'background-color', 'rgb(145, 205, 255)')
      .should('have.css', 'color', 'rgb(0, 51, 80)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(17)
      .should('have.css', 'background-color', 'rgb(249, 187, 115)')
      .should('have.css', 'color', 'rgb(72, 42, 0)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(18)
      .should('have.css', 'background-color', 'rgb(255, 180, 171)')
      .should('have.css', 'color', 'rgb(105, 0, 5)')
      .should('contain.text', 'Warn');
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
      .eq(9)
      .should('have.css', 'background-color', 'rgb(0, 75, 114)')
      .should('have.css', 'color', 'rgb(204, 229, 255)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-container > button')
      .eq(10)
      .should('have.css', 'background-color', 'rgb(102, 61, 0)')
      .should('have.css', 'color', 'rgb(255, 221, 186)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-container > button')
      .eq(11)
      .should('have.css', 'background-color', 'rgb(0, 75, 114)')
      .should('have.css', 'color', 'rgb(204, 229, 255)')
      .should('contain.text', 'Warn');
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
