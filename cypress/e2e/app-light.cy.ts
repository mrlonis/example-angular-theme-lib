import {
  testBackground,
  testMatButtonsBasic,
  testMatButtonsRaised,
  testMatButtonsStroked,
  testMatCard,
  testMatCheckboxes,
  testMatInput,
  testMatRadioButtons,
  testMatSlideToggle,
} from '../fixtures';

describe('example-theme-app: light theme', () => {
  const basicColor = 'rgb(0, 0, 0)';
  const primaryColor = 'rgb(131, 84, 22)';
  const accentColor = 'rgb(0, 100, 150)';
  const warnColor = 'rgb(186, 26, 26)';
  const formFieldPrimaryColor = 'rgba(131, 84, 22, 0.87)';

  beforeEach(() => {
    cy.wrap(
      Cypress.automation('remote:debugger:protocol', {
        command: 'Emulation.setEmulatedMedia',
        params: {
          media: 'page',
          features: [
            {
              name: 'prefers-color-scheme',
              value: 'light',
            },
          ],
        },
      }),
    );
    cy.visit('/');
  });

  it('Background should have theme colors', () => {
    testBackground('rgba(0, 0, 0, 0)', 'rgb(0, 0, 0)');
  });

  it('Mat Card should have theme colors', () => {
    testMatCard('rgb(255, 255, 255)', 'rgba(0, 0, 0, 0)');
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic(
      'rgb(0, 0, 0)',
      basicColor,
      primaryColor,
      accentColor,
      warnColor,
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.38)',
    );
  });

  it('Raised Buttons should have theme colors', () => {
    testMatButtonsRaised(
      'rgb(0, 0, 0)',
      basicColor,
      'rgb(247, 249, 254)',
      primaryColor,
      'rgb(255, 255, 255)',
      accentColor,
      'rgb(255, 255, 255)',
      warnColor,
      'rgb(255, 255, 255)',
      'rgb(255, 255, 255)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(0, 0, 0, 0.38)',
    );
  });

  it('Stroked Buttons should have theme colors', () => {
    testMatButtonsStroked(
      'rgb(0, 0, 0)',
      basicColor,
      primaryColor,
      accentColor,
      warnColor,
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.38)',
    );
  });

  it('Flat Buttons should have theme colors', () => {
    cy.get('.example-label').eq(3).should('have.css', 'color', 'rgb(0, 0, 0)').should('contain.text', 'Flat');
    cy.get('.example-button-row > button')
      .eq(15)
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(16)
      .should('have.css', 'background-color', primaryColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(17)
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(18)
      .should('have.css', 'background-color', warnColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Warn');
    cy.get('.example-button-row > button')
      .eq(19)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0.12)')
      .should('have.css', 'color', 'rgba(0, 0, 0, 0.38)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(3)
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Link');
  });

  it('Extended FAB Buttons should have theme colors', () => {
    cy.get('.example-label').eq(7).should('have.css', 'color', 'rgb(0, 0, 0)').should('contain.text', 'Extended Fab');
    cy.get('.example-button-container > button')
      .eq(8)
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Basic');
    cy.get('.example-button-container > button')
      .eq(9)
      .should('have.css', 'background-color', primaryColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-container > button')
      .eq(10)
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-container > button')
      .eq(11)
      .should('have.css', 'background-color', warnColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Warn');
    cy.get('.example-button-container > button')
      .eq(12)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0.12)')
      .should('have.css', 'color', 'rgba(0, 0, 0, 0.38)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-container > a')
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Link');
  });

  it('Inputs should have theme colors', () => {
    testMatInput('rgba(0, 0, 0, 0.6)', formFieldPrimaryColor);
  });

  it('Checkboxes should have theme colors', () => {
    testMatCheckboxes('rgba(0, 0, 0, 0)', primaryColor, accentColor, warnColor);
  });

  it('Radio buttons should have theme colors', () => {
    testMatRadioButtons(
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.87)',
      'rgba(0, 0, 0, 0.54)',
      'rgb(0, 100, 150)',
      accentColor,
    );
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle('rgb(224, 224, 224)', 'rgb(218, 160, 91)', 'rgb(101, 178, 237)', 'rgb(255, 137, 125)');
  });
});
