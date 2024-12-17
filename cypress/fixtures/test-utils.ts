import {
  TestBackgroundArgs,
  TestMatButtonsBasicArgs,
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
  cy.get('#basic-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Basic');
  cy.get('#basic-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#basic-primary-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#basic-accent-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#basic-warn-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#basic-disabled-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#basic-link-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsRaised(args: TestMatButtonsRaisedArgs) {
  cy.get('#raised-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Raised');
  cy.get('#raised-button')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#raised-primary-button')
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#raised-accent-button')
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#raised-warn-button')
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#raised-disabled-button')
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#raised-link-button')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsStroked(args: TestMatButtonsBasicArgs) {
  cy.get('#stroked-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Stroked');
  cy.get('#stroked-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#stroked-primary-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#stroked-accent-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#stroked-warn-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#stroked-disabled-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#stroked-link-button')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsFlat(args: TestMatButtonsRaisedArgs) {
  cy.get('#flat-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Flat');
  cy.get('#flat-button')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#flat-primary-button')
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#flat-accent-button')
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#flat-warn-button')
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#flat-disabled-button')
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#flat-link-button')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsExtendedFab(args: TestMatButtonsRaisedArgs) {
  cy.get('#extended-fab-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Extended Fab');
  cy.get('#extendedFabButton')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#extended-fab-primary-button')
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#extended-fab-accent-button')
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#extended-fab-warn-button')
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#extended-fab-disabled-button')
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#extended-fab-link-button')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatInput(args: TestMatInputArgs) {
  cy.get('#favorite-food-label').should('have.css', 'color', args.unfocusedColor);
  cy.get('#favorite-food-input').click();
  cy.get('#favorite-food-label').should('have.css', 'color', args.focusedColor);
}

export function testMatCheckboxes(args: TestMatCheckboxesArgs) {
  cy.get('#check-me-checkbox')
    .find('.mdc-checkbox__background')
    .should('have.css', 'background-color', args.uncheckedColor);
  cy.get('#check-me-checkbox').click();
  cy.get('#check-me-checkbox')
    .find('.mdc-checkbox__background')
    .should('have.css', 'background-color', args.accentColor);

  cy.get('#disabled-checkbox').find('input').should('be.disabled');

  cy.get('#indeterminate-checkbox').click();
  cy.get('#primaryCheckbox')
    .find('.mdc-checkbox__background')
    .should('have.css', 'background-color', args.primaryColor);
  cy.get('#accentCheckbox').find('.mdc-checkbox__background').should('have.css', 'background-color', args.accentColor);
  cy.get('#warnCheckbox').find('.mdc-checkbox__background').should('have.css', 'background-color', args.warnColor);
}

export function testMatRadioButtons(args: TestMatRadioButtonsArgs) {
  cy.get('#option-1-radio')
    .find('.mdc-radio__background')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color);
  cy.get('#option-1-radio')
    .find('.mdc-radio__background')
    .find('.mdc-radio__outer-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color)
    .should('have.css', 'border-bottom-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-left-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-right-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-top-color', args.uncheckedOuterCircleBorderColor);
  cy.get('#option-1-radio')
    .find('.mdc-radio__background')
    .find('.mdc-radio__inner-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color)
    .should('have.css', 'border-bottom-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-left-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-right-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-top-color', args.uncheckedInnerCircleBorderColor);

  cy.get('#option-1-radio').click();

  cy.get('#option-1-radio')
    .find('.mdc-radio__background')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color);
  cy.get('#option-1-radio')
    .find('.mdc-radio__background')
    .find('.mdc-radio__outer-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color)
    .should('have.css', 'border-bottom-color', args.colorWhenSelected)
    .should('have.css', 'border-left-color', args.colorWhenSelected)
    .should('have.css', 'border-right-color', args.colorWhenSelected)
    .should('have.css', 'border-top-color', args.colorWhenSelected);
  cy.get('#option-1-radio')
    .find('.mdc-radio__background')
    .find('.mdc-radio__inner-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color)
    .should('have.css', 'border-bottom-color', args.colorWhenSelected)
    .should('have.css', 'border-left-color', args.colorWhenSelected)
    .should('have.css', 'border-right-color', args.colorWhenSelected)
    .should('have.css', 'border-top-color', args.colorWhenSelected);
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
      expect(contentValue).to.eq(args.uncheckedColor);

      // use getComputedStyle to read the pseudo selector
      const after = win?.getComputedStyle($els[0], 'after');
      contentValue = after?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.accentColor);
    });

  // Primary
  cy.get('#slide-toggle-primary-radio').click();
  cy.get('mat-slide-toggle')
    .find('.mdc-switch__track')
    .then(($els) => {
      // get Window reference from element
      const win = $els[0].ownerDocument.defaultView;
      // use getComputedStyle to read the pseudo selector
      const before = win?.getComputedStyle($els[0], 'before');
      let contentValue = before?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.uncheckedColor);

      // use getComputedStyle to read the pseudo selector
      const after = win?.getComputedStyle($els[0], 'after');
      contentValue = after?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.primaryColor);
    });

  // Warn
  cy.get('#slide-toggle-warn-radio').click();
  cy.get('mat-slide-toggle')
    .find('.mdc-switch__track')
    .then(($els) => {
      // get Window reference from element
      const win = $els[0].ownerDocument.defaultView;
      // use getComputedStyle to read the pseudo selector
      const before = win?.getComputedStyle($els[0], 'before');
      let contentValue = before?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.uncheckedColor);

      // use getComputedStyle to read the pseudo selector
      const after = win?.getComputedStyle($els[0], 'after');
      contentValue = after?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.warnColor);
    });

  // Accent
  cy.get('#slide-toggle-accent-radio').click();
  cy.get('mat-slide-toggle')
    .find('.mdc-switch__track')
    .then(($els) => {
      // get Window reference from element
      const win = $els[0].ownerDocument.defaultView;
      // use getComputedStyle to read the pseudo selector
      const before = win?.getComputedStyle($els[0], 'before');
      let contentValue = before?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.uncheckedColor);

      // use getComputedStyle to read the pseudo selector
      const after = win?.getComputedStyle($els[0], 'after');
      contentValue = after?.getPropertyValue('background-color');
      expect(contentValue).to.eq(args.accentColor);
    });
}
