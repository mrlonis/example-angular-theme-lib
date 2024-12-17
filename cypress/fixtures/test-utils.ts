import {
  TestBackgroundArgs,
  TestMatButtonsBasicArgs,
  TestMatButtonsExtendedFabArgs,
  TestMatButtonsRaisedArgs,
  TestMatCardArgs,
  TestMatCheckboxesArgs,
  TestMatInputArgs,
  TestMatRadioButtonsArgs,
  TestMatSlideToggleArgs,
} from './function-input-models';

export function mockPrefersColorScheme(prefersColorScheme: 'dark' | 'light') {
  cy.wrap(
    Cypress.automation('remote:debugger:protocol', {
      command: 'Emulation.setEmulatedMedia',
      params: {
        media: 'page',
        features: [
          {
            name: 'prefers-color-scheme',
            value: prefersColorScheme,
          },
        ],
      },
    }),
  );
}

export function testBackground(args: TestBackgroundArgs) {
  cy.get('body').should('have.css', 'background-color', args.backgroundColor).should('have.css', 'color', args.color);
  cy.get('.mat-app-background')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color);
}

export function testMatCard(args: TestMatCardArgs) {
  cy.get('mat-card').should('have.css', 'background-color', args.marCardBackgroundColor);
  cy.get('mat-card-content').should('have.css', 'background-color', args.matCardContentBackgroundColor);
}

export function testMatButtonsBasic(args: TestMatButtonsBasicArgs) {
  cy.get('.example-label').eq(0).should('have.css', 'color', args.labelColor).should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(0)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(1)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('.example-button-row > button')
    .eq(2)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('.example-button-row > button')
    .eq(3)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('.example-button-row > button')
    .eq(4)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('.example-button-row > a')
    .eq(0)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsRaised(args: TestMatButtonsRaisedArgs) {
  cy.get('.example-label').eq(1).should('have.css', 'color', args.labelColor).should('contain.text', 'Raised');
  cy.get('.example-button-row > button')
    .eq(5)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(6)
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('.example-button-row > button')
    .eq(7)
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('.example-button-row > button')
    .eq(8)
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('.example-button-row > button')
    .eq(9)
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('.example-button-row > a')
    .eq(1)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsStroked(args: TestMatButtonsBasicArgs) {
  cy.get('.example-label').eq(2).should('have.css', 'color', args.labelColor).should('contain.text', 'Stroked');
  cy.get('.example-button-row > button')
    .eq(10)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(11)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('.example-button-row > button')
    .eq(12)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('.example-button-row > button')
    .eq(13)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('.example-button-row > button')
    .eq(14)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('.example-button-row > a')
    .eq(2)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsFlat(args: TestMatButtonsRaisedArgs) {
  cy.get('.example-label').eq(3).should('have.css', 'color', args.labelColor).should('contain.text', 'Flat');
  cy.get('.example-button-row > button')
    .eq(15)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(16)
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('.example-button-row > button')
    .eq(17)
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('.example-button-row > button')
    .eq(18)
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('.example-button-row > button')
    .eq(19)
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('.example-button-row > a')
    .eq(3)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsExtendedFab(args: TestMatButtonsExtendedFabArgs) {
  cy.get('.example-label').eq(7).should('have.css', 'color', args.labelColor).should('contain.text', 'Extended Fab');
  cy.get('.example-button-container > button')
    .eq(8)
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('.example-button-container > button')
    .eq(9)
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('.example-button-container > button')
    .eq(10)
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('.example-button-container > button')
    .eq(11)
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('.example-button-container > button')
    .eq(12)
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('.example-button-container > a')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatInput(args: TestMatInputArgs) {
  cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', args.initialColor);
  cy.get('input').eq(0).click();
  cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', args.primaryColor);
}

export function testMatCheckboxes(args: TestMatCheckboxesArgs) {
  cy.get('.mdc-checkbox__background').eq(0).should('have.css', 'background-color', args.uncheckedColor);
  cy.get('.example-margin').eq(0).click();
  cy.get('.mdc-checkbox__background').eq(0).should('have.css', 'background-color', args.accentColor);

  cy.get('.example-margin').eq(1).find('input').should('be.disabled');

  cy.get('.example-margin').eq(2).click();
  cy.get('.mdc-checkbox__background').eq(3).should('have.css', 'background-color', args.primaryColor);
  cy.get('.mdc-checkbox__background').eq(4).should('have.css', 'background-color', args.accentColor);
  cy.get('.mdc-checkbox__background').eq(5).should('have.css', 'background-color', args.warnColor);
}

export function testMatRadioButtons(args: TestMatRadioButtonsArgs) {
  cy.get('.mdc-radio__background')
    .eq(0)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.uncheckedColor);
  cy.get('.mdc-radio__background')
    .eq(0)
    .find('.mdc-radio__outer-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.uncheckedColor)
    .should('have.css', 'border-bottom-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-left-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-right-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-top-color', args.uncheckedOuterCircleBorderColor);
  cy.get('.mdc-radio__background')
    .eq(0)
    .find('.mdc-radio__inner-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.uncheckedColor)
    .should('have.css', 'border-bottom-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-left-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-right-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-top-color', args.uncheckedInnerCircleBorderColor);

  cy.get('mat-radio-button').eq(0).click();

  cy.get('.mdc-radio__background')
    .eq(0)
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.uncheckedColor);
  cy.get('.mdc-radio__background')
    .eq(0)
    .find('.mdc-radio__outer-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.uncheckedColor)
    .should('have.css', 'border-bottom-color', args.accentColor)
    .should('have.css', 'border-left-color', args.accentColor)
    .should('have.css', 'border-right-color', args.accentColor)
    .should('have.css', 'border-top-color', args.accentColor);
  cy.get('.mdc-radio__background')
    .eq(0)
    .find('.mdc-radio__inner-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.uncheckedColor)
    .should('have.css', 'border-bottom-color', args.accentColor)
    .should('have.css', 'border-left-color', args.accentColor)
    .should('have.css', 'border-right-color', args.accentColor)
    .should('have.css', 'border-top-color', args.accentColor);
}

export function testMatSlideToggle(args: TestMatSlideToggleArgs) {
  // Accent color is the default
  cy.get('mat-slide-toggle')
    .find('.mdc-switch__track')
    .then(($els) => {
      // get Window reference from element
      const win = $els[0].ownerDocument.defaultView;
      // use getComputedStyle to read the pseudo selector
      const before = win?.getComputedStyle($els[0], 'before');
      let contentValue = before?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.backgroundColor);

      // use getComputedStyle to read the pseudo selector
      const after = win?.getComputedStyle($els[0], 'after');
      contentValue = after?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.accentColor);
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
      expect(contentValue).to.eq(args.backgroundColor);

      // use getComputedStyle to read the pseudo selector
      const after = win?.getComputedStyle($els[0], 'after');
      contentValue = after?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.primaryColor);
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
      expect(contentValue).to.eq(args.backgroundColor);

      // use getComputedStyle to read the pseudo selector
      const after = win?.getComputedStyle($els[0], 'after');
      contentValue = after?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.warnColor);
    });
}
