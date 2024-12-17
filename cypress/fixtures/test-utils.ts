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
  cy.get('mat-card')
    .should('have.css', 'background-color', args.marCardBackgroundColor)
    .find('mat-card-content')
    .should('have.css', 'background-color', args.matCardContentBackgroundColor);
}

function buttonAssertions(id: string, backgroundColor: string, color: string, text: string) {
  cy.get(id)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', color)
    .should('contain.text', text);
}

export function testMatButtonsBasic(args: TestMatButtonsBasicArgs) {
  cy.get('#basic-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Basic');
  buttonAssertions('#basic-button', args.backgroundColor, args.basicColor, 'Basic');
  buttonAssertions('#basic-primary-button', args.backgroundColor, args.primaryColor, 'Primary');
  buttonAssertions('#basic-accent-button', args.backgroundColor, args.accentColor, 'Accent');
  buttonAssertions('#basic-warn-button', args.backgroundColor, args.warnColor, 'Warn');
  buttonAssertions('#basic-disabled-button', args.backgroundColor, args.disabledColor, 'Disabled');
  buttonAssertions('#basic-link-button', args.backgroundColor, args.basicColor, 'Link');
}

export function testMatButtonsRaised(args: TestMatButtonsRaisedArgs) {
  cy.get('#raised-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Raised');
  buttonAssertions('#raised-button', args.basicBackgroundColor, args.basicColor, 'Basic');
  buttonAssertions('#raised-primary-button', args.primaryBackgroundColor, args.primaryColor, 'Primary');
  buttonAssertions('#raised-accent-button', args.accentBackgroundColor, args.accentColor, 'Accent');
  buttonAssertions('#raised-warn-button', args.warnBackgroundColor, args.warnColor, 'Warn');
  buttonAssertions('#raised-disabled-button', args.disabledBackgroundColor, args.disabledColor, 'Disabled');
  buttonAssertions('#raised-link-button', args.basicBackgroundColor, args.basicColor, 'Link');
}

export function testMatButtonsStroked(args: TestMatButtonsBasicArgs) {
  cy.get('#stroked-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Stroked');
  buttonAssertions('#stroked-button', args.backgroundColor, args.basicColor, 'Basic');
  buttonAssertions('#stroked-primary-button', args.backgroundColor, args.primaryColor, 'Primary');
  buttonAssertions('#stroked-accent-button', args.backgroundColor, args.accentColor, 'Accent');
  buttonAssertions('#stroked-warn-button', args.backgroundColor, args.warnColor, 'Warn');
  buttonAssertions('#stroked-disabled-button', args.backgroundColor, args.disabledColor, 'Disabled');
  buttonAssertions('#stroked-link-button', args.backgroundColor, args.basicColor, 'Link');
}

export function testMatButtonsFlat(args: TestMatButtonsRaisedArgs) {
  cy.get('#flat-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Flat');
  buttonAssertions('#flat-button', args.basicBackgroundColor, args.basicColor, 'Basic');
  buttonAssertions('#flat-primary-button', args.primaryBackgroundColor, args.primaryColor, 'Primary');
  buttonAssertions('#flat-accent-button', args.accentBackgroundColor, args.accentColor, 'Accent');
  buttonAssertions('#flat-warn-button', args.warnBackgroundColor, args.warnColor, 'Warn');
  buttonAssertions('#flat-disabled-button', args.disabledBackgroundColor, args.disabledColor, 'Disabled');
  buttonAssertions('#flat-link-button', args.basicBackgroundColor, args.basicColor, 'Link');
}

export function testMatButtonsExtendedFab(args: TestMatButtonsRaisedArgs) {
  cy.get('#extended-fab-label').should('have.css', 'color', args.labelColor).should('contain.text', 'Extended Fab');
  buttonAssertions('#extendedFabButton', args.basicBackgroundColor, args.basicColor, 'Basic');
  buttonAssertions('#extended-fab-primary-button', args.primaryBackgroundColor, args.primaryColor, 'Primary');
  buttonAssertions('#extended-fab-accent-button', args.accentBackgroundColor, args.accentColor, 'Accent');
  buttonAssertions('#extended-fab-warn-button', args.warnBackgroundColor, args.warnColor, 'Warn');
  buttonAssertions('#extended-fab-disabled-button', args.disabledBackgroundColor, args.disabledColor, 'Disabled');
  buttonAssertions('#extended-fab-link-button', args.basicBackgroundColor, args.basicColor, 'Link');
}

export function testMatInput(args: TestMatInputArgs) {
  cy.get('#favorite-food-label').should('have.css', 'color', args.unfocusedColor);
  cy.get('#favorite-food-input').click();
  cy.get('#favorite-food-label').should('have.css', 'color', args.focusedColor);
}

export function testMatCheckboxes(args: TestMatCheckboxesArgs) {
  function checkboxAssertions(id: string, backgroundColor: string) {
    cy.get(id).find('.mdc-checkbox__background').should('have.css', 'background-color', backgroundColor);
  }

  checkboxAssertions('#check-me-checkbox', args.uncheckedColor);
  cy.get('#check-me-checkbox').click();
  checkboxAssertions('#check-me-checkbox', args.accentColor);

  cy.get('#disabled-checkbox').find('input').should('be.disabled');

  cy.get('#indeterminate-checkbox').click();
  checkboxAssertions('#primary-checkbox', args.primaryColor);
  checkboxAssertions('#accent-checkbox', args.accentColor);
  checkboxAssertions('#warn-checkbox', args.warnColor);
}

export function testMatRadioButtons(args: TestMatRadioButtonsArgs) {
  function radioAssertions(
    backgroundColor: string,
    color: string,
    uncheckedOuterCircleBorderColor: string,
    uncheckedInnerCircleBorderColor: string,
  ) {
    cy.get('#option-1-radio')
      .find('.mdc-radio__background')
      .should('have.css', 'background-color', backgroundColor)
      .should('have.css', 'color', color);
    cy.get('#option-1-radio')
      .find('.mdc-radio__outer-circle')
      .should('have.css', 'background-color', backgroundColor)
      .should('have.css', 'color', color)
      .should('have.css', 'border-bottom-color', uncheckedOuterCircleBorderColor)
      .should('have.css', 'border-left-color', uncheckedOuterCircleBorderColor)
      .should('have.css', 'border-right-color', uncheckedOuterCircleBorderColor)
      .should('have.css', 'border-top-color', uncheckedOuterCircleBorderColor);
    cy.get('#option-1-radio')
      .find('.mdc-radio__inner-circle')
      .should('have.css', 'background-color', backgroundColor)
      .should('have.css', 'color', color)
      .should('have.css', 'border-bottom-color', uncheckedInnerCircleBorderColor)
      .should('have.css', 'border-left-color', uncheckedInnerCircleBorderColor)
      .should('have.css', 'border-right-color', uncheckedInnerCircleBorderColor)
      .should('have.css', 'border-top-color', uncheckedInnerCircleBorderColor);
  }

  radioAssertions(
    args.backgroundColor,
    args.color,
    args.uncheckedOuterCircleBorderColor,
    args.uncheckedInnerCircleBorderColor,
  );
  cy.get('#option-1-radio').click();
  radioAssertions(args.backgroundColor, args.color, args.colorWhenSelected, args.colorWhenSelected);
}

export function testMatSlideToggle(args: TestMatSlideToggleArgs) {
  function pseudoCssAssertions($els: JQuery<HTMLElement>, uncheckedColor: string, checkedColor: string) {
    // get Window reference from element
    const win = $els[0].ownerDocument.defaultView;
    // use getComputedStyle to read the pseudo selector
    const before = win?.getComputedStyle($els[0], 'before');
    let contentValue = before?.getPropertyValue('background-color');
    expect(contentValue).to.eq(uncheckedColor);

    // use getComputedStyle to read the pseudo selector
    const after = win?.getComputedStyle($els[0], 'after');
    contentValue = after?.getPropertyValue('background-color');
    expect(contentValue).to.eq(checkedColor);
  }

  function slideToggleAssertions(uncheckedColor: string, checkedColor: string) {
    cy.get('mat-slide-toggle')
      .find('.mdc-switch__track')
      .then(($els) => {
        pseudoCssAssertions($els, uncheckedColor, checkedColor);
      });
  }

  slideToggleAssertions(args.uncheckedColor, args.accentColor);

  cy.get('#slide-toggle-primary-radio').click();
  slideToggleAssertions(args.uncheckedColor, args.primaryColor);

  cy.get('#slide-toggle-warn-radio').click();
  slideToggleAssertions(args.uncheckedColor, args.warnColor);

  cy.get('#slide-toggle-accent-radio').click();
  slideToggleAssertions(args.uncheckedColor, args.accentColor);
}
