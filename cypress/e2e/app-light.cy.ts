import { testBackground, testMatButtonsBasic, testMatCard } from '../fixtures';

describe('example-theme-app: light theme', () => {
  const basicColor = 'rgb(131, 84, 22)';
  const primaryColor = 'rgb(131, 84, 22)';
  const accentColor = 'rgb(0, 100, 150)';
  const warnColor = 'rgb(186, 26, 26)';

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
    testMatCard('rgb(247, 249, 254)', 'rgba(0, 0, 0, 0)');
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic(
      'rgb(0, 0, 0)',
      basicColor,
      primaryColor,
      accentColor,
      warnColor,
      'rgba(0, 0, 0, 0)',
      'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    );
  });

  it('Raised Buttons should have theme colors', () => {
    cy.get('.example-label').eq(1).should('have.css', 'color', 'rgb(0, 0, 0)').should('contain.text', 'Raised');
    cy.get('.example-button-row > button')
      .eq(5)
      .should('have.css', 'background-color', 'rgb(247, 249, 254)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(6)
      .should('have.css', 'background-color', 'rgb(247, 249, 254)')
      .should('have.css', 'color', primaryColor)
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(7)
      .should('have.css', 'background-color', 'rgb(247, 249, 254)')
      .should('have.css', 'color', accentColor)
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(8)
      .should('have.css', 'background-color', 'rgb(247, 249, 254)')
      .should('have.css', 'color', warnColor)
      .should('contain.text', 'Warn');
    cy.get('.example-button-row > button')
      .eq(9)
      .should('have.css', 'background-color', 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)')
      .should('have.css', 'color', 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(1)
      .should('have.css', 'background-color', 'rgb(247, 249, 254)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Link');
  });

  it('Stroked Buttons should have theme colors', () => {
    cy.get('.example-label').eq(2).should('have.css', 'color', 'rgb(0, 0, 0)').should('contain.text', 'Stroked');
    cy.get('.example-button-row > button')
      .eq(10)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(11)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', primaryColor)
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(12)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', accentColor)
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(13)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', warnColor)
      .should('contain.text', 'Warn');
    cy.get('.example-button-row > button')
      .eq(14)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(2)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Link');
  });

  it('Flat Buttons should have theme colors', () => {
    cy.get('.example-label').eq(3).should('have.css', 'color', 'rgb(0, 0, 0)').should('contain.text', 'Flat');
    cy.get('.example-button-row > button')
      .eq(15)
      .should('have.css', 'background-color', basicColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
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
      .should('have.css', 'background-color', 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)')
      .should('have.css', 'color', 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(3)
      .should('have.css', 'background-color', basicColor)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Link');
  });

  it('Extended FAB Buttons should have theme colors', () => {
    cy.get('.example-label').eq(7).should('have.css', 'color', 'rgb(0, 0, 0)').should('contain.text', 'Extended Fab');
    cy.get('.example-button-container > button')
      .eq(8)
      .should('have.css', 'background-color', 'rgb(204, 229, 255)')
      .should('have.css', 'color', 'rgb(0, 30, 49)')
      .should('contain.text', 'Basic');
    cy.get('.example-button-container > button')
      .eq(9)
      .should('have.css', 'background-color', 'rgb(255, 221, 186)')
      .should('have.css', 'color', 'rgb(43, 23, 0)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-container > button')
      .eq(10)
      .should('have.css', 'background-color', 'rgb(204, 229, 255)')
      .should('have.css', 'color', 'rgb(0, 30, 49)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-container > button')
      .eq(11)
      .should('have.css', 'background-color', 'rgb(255, 221, 186)')
      .should('have.css', 'color', 'rgb(43, 23, 0)')
      .should('contain.text', 'Warn');
    cy.get('.example-button-container > button')
      .eq(12)
      .should('have.css', 'background-color', 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)')
      .should('have.css', 'color', 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-container > a')
      .should('have.css', 'background-color', 'rgb(204, 229, 255)')
      .should('have.css', 'color', 'rgb(0, 30, 49)')
      .should('contain.text', 'Link');
  });

  it('Inputs should have theme colors', () => {
    cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', 'rgb(64, 72, 79)');
    cy.get('input').eq(0).click();
    cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', primaryColor);
  });

  it('Checkboxes should have theme colors', () => {
    cy.get('.mdc-checkbox__background').eq(0).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('.example-margin').eq(0).click();
    cy.get('.mdc-checkbox__background').eq(0).should('have.css', 'background-color', accentColor);

    cy.get('.example-margin').eq(1).find('input').should('be.disabled');

    cy.get('.example-margin').eq(2).click();
    cy.get('.mdc-checkbox__background').eq(3).should('have.css', 'background-color', primaryColor);
    cy.get('.mdc-checkbox__background').eq(4).should('have.css', 'background-color', accentColor);
    cy.get('.mdc-checkbox__background').eq(5).should('have.css', 'background-color', warnColor);
  });

  it('Radio buttons should have theme colors', () => {
    cy.get('.mdc-radio__background')
      .eq(0)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(24, 28, 32)');
    cy.get('.mdc-radio__background')
      .eq(0)
      .find('.mdc-radio__outer-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(24, 28, 32)')
      .should('have.css', 'border-bottom-color', 'rgb(64, 72, 79)')
      .should('have.css', 'border-left-color', 'rgb(64, 72, 79)')
      .should('have.css', 'border-right-color', 'rgb(64, 72, 79)')
      .should('have.css', 'border-top-color', 'rgb(64, 72, 79)');
    cy.get('.mdc-radio__background')
      .eq(0)
      .find('.mdc-radio__inner-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(24, 28, 32)')
      .should('have.css', 'border-bottom-color', 'rgb(24, 28, 32)')
      .should('have.css', 'border-left-color', 'rgb(24, 28, 32)')
      .should('have.css', 'border-right-color', 'rgb(24, 28, 32)')
      .should('have.css', 'border-top-color', 'rgb(24, 28, 32)');

    cy.get('mat-radio-button').eq(0).click();

    cy.get('.mdc-radio__background')
      .eq(0)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(24, 28, 32)');
    cy.get('.mdc-radio__background')
      .eq(0)
      .find('.mdc-radio__outer-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(24, 28, 32)')
      .should('have.css', 'border-bottom-color', accentColor)
      .should('have.css', 'border-left-color', accentColor)
      .should('have.css', 'border-right-color', accentColor)
      .should('have.css', 'border-top-color', accentColor);
    cy.get('.mdc-radio__background')
      .eq(0)
      .find('.mdc-radio__inner-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(24, 28, 32)')
      .should('have.css', 'border-bottom-color', accentColor)
      .should('have.css', 'border-left-color', accentColor)
      .should('have.css', 'border-right-color', accentColor)
      .should('have.css', 'border-top-color', accentColor);
  });

  it('Slide Toggle should have theme colors', () => {
    // Accent color is the default
    cy.get('mat-slide-toggle')
      .find('.mdc-switch__track')
      .then(($els) => {
        // get Window reference from element
        const win = $els[0].ownerDocument.defaultView;
        // use getComputedStyle to read the pseudo selector
        const before = win?.getComputedStyle($els[0], 'before');
        let contentValue = before?.getPropertyValue('background-color');
        expect(contentValue).to.eq('rgb(220, 227, 237)');

        // use getComputedStyle to read the pseudo selector
        const after = win?.getComputedStyle($els[0], 'after');
        contentValue = after?.getPropertyValue('background-color');
        expect(contentValue).to.eq(accentColor);
      });

    // Primary
    cy.get('mat-radio-button').eq(2).click();
    cy.get('mat-slide-toggle')
      .find('.mdc-switch__track')
      .then(($els) => {
        // get Window reference from element
        const win = $els[0].ownerDocument.defaultView;
        // use getComputedStyle to read the pseudo selector
        const before = win?.getComputedStyle($els[0], 'before');
        let contentValue = before?.getPropertyValue('background-color');
        expect(contentValue).to.eq('rgb(220, 227, 237)');

        // use getComputedStyle to read the pseudo selector
        const after = win?.getComputedStyle($els[0], 'after');
        contentValue = after?.getPropertyValue('background-color');
        expect(contentValue).to.eq(primaryColor);
      });

    // Warn
    cy.get('mat-radio-button').eq(4).click();
    cy.get('mat-slide-toggle')
      .find('.mdc-switch__track')
      .then(($els) => {
        // get Window reference from element
        const win = $els[0].ownerDocument.defaultView;
        // use getComputedStyle to read the pseudo selector
        const before = win?.getComputedStyle($els[0], 'before');
        let contentValue = before?.getPropertyValue('background-color');
        expect(contentValue).to.eq('rgb(220, 227, 237)');

        // use getComputedStyle to read the pseudo selector
        const after = win?.getComputedStyle($els[0], 'after');
        contentValue = after?.getPropertyValue('background-color');
        expect(contentValue).to.eq(warnColor);
      });
  });
});
