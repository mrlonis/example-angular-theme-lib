describe('example-theme-app: dark theme', () => {
  const basicColor = 'rgb(255, 255, 255)';
  const primaryColor = 'rgb(145, 205, 255)';
  const accentColor = 'rgb(249, 187, 115)';
  const warnColor = 'rgb(255, 180, 171)';
  const formFieldPrimaryColor = 'rgba(145, 205, 255, 0.87)';

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
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(1)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', primaryColor)
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(2)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', accentColor)
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(3)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', warnColor)
      .should('contain.text', 'Warn');
    cy.get('.example-button-row > button')
      .eq(4)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.5)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(0)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Link');
  });

  it('Raised Buttons should have theme colors', () => {
    cy.get('.example-label').eq(1).should('have.css', 'color', 'rgb(255, 255, 255)').should('contain.text', 'Raised');
    cy.get('.example-button-row > button')
      .eq(5)
      .should('have.css', 'background-color', 'rgb(66, 66, 66)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(6)
      .should('have.css', 'background-color', primaryColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(7)
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(8)
      .should('have.css', 'background-color', warnColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Warn');
    cy.get('.example-button-row > button')
      .eq(9)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.12)')
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.5)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(1)
      .should('have.css', 'background-color', 'rgb(66, 66, 66)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Link');
  });

  it('Stroked Buttons should have theme colors', () => {
    cy.get('.example-label').eq(2).should('have.css', 'color', 'rgb(255, 255, 255)').should('contain.text', 'Stroked');
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
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.5)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(2)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Link');
  });

  it('Flat Buttons should have theme colors', () => {
    cy.get('.example-label').eq(3).should('have.css', 'color', 'rgb(255, 255, 255)').should('contain.text', 'Flat');
    cy.get('.example-button-row > button')
      .eq(15)
      .should('have.css', 'background-color', 'rgb(66, 66, 66)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Basic');
    cy.get('.example-button-row > button')
      .eq(16)
      .should('have.css', 'background-color', primaryColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-row > button')
      .eq(17)
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-row > button')
      .eq(18)
      .should('have.css', 'background-color', warnColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Warn');
    cy.get('.example-button-row > button')
      .eq(19)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.12)')
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.5)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-row > a')
      .eq(3)
      .should('have.css', 'background-color', 'rgb(66, 66, 66)')
      .should('have.css', 'color', basicColor)
      .should('contain.text', 'Link');
  });

  it('Extended FAB Buttons should have theme colors', () => {
    cy.get('.example-label')
      .eq(7)
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('contain.text', 'Extended Fab');
    cy.get('.example-button-container > button')
      .eq(8)
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Basic');
    cy.get('.example-button-container > button')
      .eq(9)
      .should('have.css', 'background-color', primaryColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Primary');
    cy.get('.example-button-container > button')
      .eq(10)
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Accent');
    cy.get('.example-button-container > button')
      .eq(11)
      .should('have.css', 'background-color', warnColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Warn');
    cy.get('.example-button-container > button')
      .eq(12)
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.12)')
      .should('have.css', 'color', 'rgba(255, 255, 255, 0.5)')
      .should('contain.text', 'Disabled');
    cy.get('.example-button-container > a')
      .should('have.css', 'background-color', accentColor)
      .should('have.css', 'color', 'rgb(0, 0, 0)')
      .should('contain.text', 'Link');
  });

  it('Inputs should have theme colors', () => {
    cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', 'rgba(255, 255, 255, 0.6)');
    cy.get('input').eq(0).click();
    cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', formFieldPrimaryColor);
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
      .should('have.css', 'color', 'rgb(224, 226, 231)');
    cy.get('.mdc-radio__background')
      .eq(0)
      .find('.mdc-radio__outer-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(224, 226, 231)')
      .should('have.css', 'border-bottom-color', 'rgb(220, 227, 237)')
      .should('have.css', 'border-left-color', 'rgb(220, 227, 237)')
      .should('have.css', 'border-right-color', 'rgb(220, 227, 237)')
      .should('have.css', 'border-top-color', 'rgb(220, 227, 237)');
    cy.get('.mdc-radio__background')
      .eq(0)
      .find('.mdc-radio__inner-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(224, 226, 231)')
      .should('have.css', 'border-bottom-color', 'rgb(224, 226, 231)')
      .should('have.css', 'border-left-color', 'rgb(224, 226, 231)')
      .should('have.css', 'border-right-color', 'rgb(224, 226, 231)')
      .should('have.css', 'border-top-color', 'rgb(224, 226, 231)');

    cy.get('mat-radio-button').eq(0).click();

    cy.get('.mdc-radio__background')
      .eq(0)
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(224, 226, 231)');
    cy.get('.mdc-radio__background')
      .eq(0)
      .find('.mdc-radio__outer-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(224, 226, 231)')
      .should('have.css', 'border-bottom-color', accentColor)
      .should('have.css', 'border-left-color', accentColor)
      .should('have.css', 'border-right-color', accentColor)
      .should('have.css', 'border-top-color', accentColor);
    cy.get('.mdc-radio__background')
      .eq(0)
      .find('.mdc-radio__inner-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .should('have.css', 'color', 'rgb(224, 226, 231)')
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
        expect(contentValue).to.eq('rgb(64, 72, 79)');

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
        expect(contentValue).to.eq('rgb(64, 72, 79)');

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
        expect(contentValue).to.eq('rgb(64, 72, 79)');

        // use getComputedStyle to read the pseudo selector
        const after = win?.getComputedStyle($els[0], 'after');
        contentValue = after?.getPropertyValue('background-color');
        expect(contentValue).to.eq(warnColor);
      });
  });
});
