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
  cy.get('#basicLabel').should('have.css', 'color', args.labelColor).should('contain.text', 'Basic');
  cy.get('#basicButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#basicPrimaryButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#basicAccentButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#basicWarnButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#basicDisabledButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#basicLinkButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsRaised(args: TestMatButtonsRaisedArgs) {
  cy.get('#raisedLabel').should('have.css', 'color', args.labelColor).should('contain.text', 'Raised');
  cy.get('#raisedButton')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#raisedPrimaryButton')
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#raisedAccentButton')
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#raisedWarnButton')
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#raisedDisabledButton')
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#raisedLinkButton')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsStroked(args: TestMatButtonsBasicArgs) {
  cy.get('#strokedLabel').should('have.css', 'color', args.labelColor).should('contain.text', 'Stroked');
  cy.get('#strokedButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#strokedPrimaryButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#strokedAccentButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#strokedWarnButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#strokedDisabledButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#strokedLinkButton')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsFlat(args: TestMatButtonsRaisedArgs) {
  cy.get('#flatLabel').should('have.css', 'color', args.labelColor).should('contain.text', 'Flat');
  cy.get('#flatButton')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#flatPrimaryButton')
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#flatAccentButton')
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#flatWarnButton')
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#flatDisabledButton')
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#flatLinkButton')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsExtendedFab(args: TestMatButtonsRaisedArgs) {
  cy.get('#extendedFabLabel').should('have.css', 'color', args.labelColor).should('contain.text', 'Extended Fab');
  cy.get('#extendedFabButton')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Basic');
  cy.get('#extendedFabPrimaryButton')
    .should('have.css', 'background-color', args.primaryBackgroundColor)
    .should('have.css', 'color', args.primaryColor)
    .should('contain.text', 'Primary');
  cy.get('#extendedFabAccentButton')
    .should('have.css', 'background-color', args.accentBackgroundColor)
    .should('have.css', 'color', args.accentColor)
    .should('contain.text', 'Accent');
  cy.get('#extendedFabWarnButton')
    .should('have.css', 'background-color', args.warnBackgroundColor)
    .should('have.css', 'color', args.warnColor)
    .should('contain.text', 'Warn');
  cy.get('#extendedFabDisabledButton')
    .should('have.css', 'background-color', args.disabledBackgroundColor)
    .should('have.css', 'color', args.disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('#extendedFabLinkButton')
    .should('have.css', 'background-color', args.basicBackgroundColor)
    .should('have.css', 'color', args.basicColor)
    .should('contain.text', 'Link');
}

export function testMatInput(args: TestMatInputArgs) {
  cy.get('#favoriteFoodLabel').should('have.css', 'color', args.unfocusedColor);
  cy.get('#favoriteFoodInput').click();
  cy.get('#favoriteFoodLabel').should('have.css', 'color', args.focusedColor);
}

export function testMatCheckboxes(args: TestMatCheckboxesArgs) {
  cy.get('#checkbox1').find('.mdc-checkbox__background').should('have.css', 'background-color', args.uncheckedColor);
  cy.get('#checkbox1').click();
  cy.get('#checkbox1').find('.mdc-checkbox__background').should('have.css', 'background-color', args.accentColor);

  cy.get('#disabledCheckbox').find('input').should('be.disabled');

  cy.get('#checkbox2').click();
  cy.get('#primaryCheckbox')
    .find('.mdc-checkbox__background')
    .should('have.css', 'background-color', args.primaryColor);
  cy.get('#accentCheckbox').find('.mdc-checkbox__background').should('have.css', 'background-color', args.accentColor);
  cy.get('#warnCheckbox').find('.mdc-checkbox__background').should('have.css', 'background-color', args.warnColor);
}

export function testMatRadioButtons(args: TestMatRadioButtonsArgs) {
  cy.get('#option1Radio')
    .find('.mdc-radio__background')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color);
  cy.get('#option1Radio')
    .find('.mdc-radio__background')
    .find('.mdc-radio__outer-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color)
    .should('have.css', 'border-bottom-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-left-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-right-color', args.uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-top-color', args.uncheckedOuterCircleBorderColor);
  cy.get('#option1Radio')
    .find('.mdc-radio__background')
    .find('.mdc-radio__inner-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color)
    .should('have.css', 'border-bottom-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-left-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-right-color', args.uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-top-color', args.uncheckedInnerCircleBorderColor);

  cy.get('#option1Radio').click();

  cy.get('#option1Radio')
    .find('.mdc-radio__background')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color);
  cy.get('#option1Radio')
    .find('.mdc-radio__background')
    .find('.mdc-radio__outer-circle')
    .should('have.css', 'background-color', args.backgroundColor)
    .should('have.css', 'color', args.color)
    .should('have.css', 'border-bottom-color', args.colorWhenSelected)
    .should('have.css', 'border-left-color', args.colorWhenSelected)
    .should('have.css', 'border-right-color', args.colorWhenSelected)
    .should('have.css', 'border-top-color', args.colorWhenSelected);
  cy.get('#option1Radio')
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
  cy.get('#slideTogglePrimaryRadio').click();
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
  cy.get('#slideToggleWarnRadio').click();
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
}
