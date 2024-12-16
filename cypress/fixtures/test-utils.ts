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

export function testMatButtonsRaised(
  labelColor: string,
  basicColor: string,
  primaryColor: string,
  accentColor: string,
  warnColor: string,
  backgroundColor: string,
  disabledBackgroundColor: string,
  disabledColor: string,
) {
  cy.get('.example-label').eq(1).should('have.css', 'color', labelColor).should('contain.text', 'Raised');
  cy.get('.example-button-row > button')
    .eq(5)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', basicColor)
    .should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(6)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', primaryColor)
    .should('contain.text', 'Primary');
  cy.get('.example-button-row > button')
    .eq(7)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', accentColor)
    .should('contain.text', 'Accent');
  cy.get('.example-button-row > button')
    .eq(8)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', warnColor)
    .should('contain.text', 'Warn');
  cy.get('.example-button-row > button')
    .eq(9)
    .should('have.css', 'background-color', disabledBackgroundColor)
    .should('have.css', 'color', disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('.example-button-row > a')
    .eq(1)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', basicColor)
    .should('contain.text', 'Link');
}

export function testMatButtonsStroked(
  labelColor: string,
  basicColor: string,
  primaryColor: string,
  accentColor: string,
  warnColor: string,
  backgroundColor: string,
  disabledColor: string,
) {
  cy.get('.example-label').eq(2).should('have.css', 'color', labelColor).should('contain.text', 'Stroked');
  cy.get('.example-button-row > button')
    .eq(10)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', basicColor)
    .should('contain.text', 'Basic');
  cy.get('.example-button-row > button')
    .eq(11)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', primaryColor)
    .should('contain.text', 'Primary');
  cy.get('.example-button-row > button')
    .eq(12)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', accentColor)
    .should('contain.text', 'Accent');
  cy.get('.example-button-row > button')
    .eq(13)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', warnColor)
    .should('contain.text', 'Warn');
  cy.get('.example-button-row > button')
    .eq(14)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', disabledColor)
    .should('contain.text', 'Disabled');
  cy.get('.example-button-row > a')
    .eq(2)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', basicColor)
    .should('contain.text', 'Link');
}

export function testMatInput(color: string, primaryColor: string) {
  cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', color);
  cy.get('input').eq(0).click();
  cy.get('.mat-mdc-form-field-infix > label').eq(0).should('have.css', 'color', primaryColor);
}

export function testMatCheckboxes(color: string, primaryColor: string, accentColor: string, warnColor: string) {
  cy.get('.mdc-checkbox__background').eq(0).should('have.css', 'background-color', color);
  cy.get('.example-margin').eq(0).click();
  cy.get('.mdc-checkbox__background').eq(0).should('have.css', 'background-color', accentColor);

  cy.get('.example-margin').eq(1).find('input').should('be.disabled');

  cy.get('.example-margin').eq(2).click();
  cy.get('.mdc-checkbox__background').eq(3).should('have.css', 'background-color', primaryColor);
  cy.get('.mdc-checkbox__background').eq(4).should('have.css', 'background-color', accentColor);
  cy.get('.mdc-checkbox__background').eq(5).should('have.css', 'background-color', warnColor);
}

export function testMatRadioButtons(
  backgroundColor: string,
  uncheckedColor: string,
  uncheckedOuterCircleBorderColor: string,
  uncheckedInnerCircleBorderColor: string,
  accentColor: string,
) {
  cy.get('.mdc-radio__background')
    .eq(0)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', uncheckedColor);
  cy.get('.mdc-radio__background')
    .eq(0)
    .find('.mdc-radio__outer-circle')
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', uncheckedColor)
    .should('have.css', 'border-bottom-color', uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-left-color', uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-right-color', uncheckedOuterCircleBorderColor)
    .should('have.css', 'border-top-color', uncheckedOuterCircleBorderColor);
  cy.get('.mdc-radio__background')
    .eq(0)
    .find('.mdc-radio__inner-circle')
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', uncheckedColor)
    .should('have.css', 'border-bottom-color', uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-left-color', uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-right-color', uncheckedInnerCircleBorderColor)
    .should('have.css', 'border-top-color', uncheckedInnerCircleBorderColor);

  cy.get('mat-radio-button').eq(0).click();

  cy.get('.mdc-radio__background')
    .eq(0)
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', uncheckedColor);
  cy.get('.mdc-radio__background')
    .eq(0)
    .find('.mdc-radio__outer-circle')
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', uncheckedColor)
    .should('have.css', 'border-bottom-color', accentColor)
    .should('have.css', 'border-left-color', accentColor)
    .should('have.css', 'border-right-color', accentColor)
    .should('have.css', 'border-top-color', accentColor);
  cy.get('.mdc-radio__background')
    .eq(0)
    .find('.mdc-radio__inner-circle')
    .should('have.css', 'background-color', backgroundColor)
    .should('have.css', 'color', uncheckedColor)
    .should('have.css', 'border-bottom-color', accentColor)
    .should('have.css', 'border-left-color', accentColor)
    .should('have.css', 'border-right-color', accentColor)
    .should('have.css', 'border-top-color', accentColor);
}

export function testMatSlideToggle(
  backgroundColor: string,
  primaryColor: string,
  accentColor: string,
  warnColor: string,
) {
  // Accent color is the default
  cy.get('mat-slide-toggle')
    .find('.mdc-switch__track')
    .then(($els) => {
      // get Window reference from element
      const win = $els[0].ownerDocument.defaultView;
      // use getComputedStyle to read the pseudo selector
      const before = win?.getComputedStyle($els[0], 'before');
      let contentValue = before?.getPropertyValue('background-color');
      expect(contentValue).to.eq(backgroundColor);

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
      expect(contentValue).to.eq(backgroundColor);

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
      expect(contentValue).to.eq(backgroundColor);

      // use getComputedStyle to read the pseudo selector
      const after = win?.getComputedStyle($els[0], 'after');
      contentValue = after?.getPropertyValue('background-color');
      expect(contentValue).to.eq(warnColor);
    });
}
