import { expect, Page } from '@playwright/test';
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

export async function mockPrefersColorScheme(page: Page, prefersColorScheme: 'dark' | 'light'): Promise<void> {
  await page.emulateMedia({ colorScheme: prefersColorScheme });
}

export async function testBackground(page: Page, args: TestBackgroundArgs): Promise<void> {
  await expect(page.locator('body')).toHaveCSS('background-color', args.backgroundColor);
  await expect(page.locator('body')).toHaveCSS('color', args.color);
  await expect(page.locator('.mat-app-background')).toHaveCSS('background-color', args.backgroundColor);
  await expect(page.locator('.mat-app-background')).toHaveCSS('color', args.color);
}

export async function testMatCard(page: Page, args: TestMatCardArgs): Promise<void> {
  const matCard = page.locator('mat-card').first();
  await expect(matCard).toHaveCSS('background-color', args.marCardBackgroundColor);
  await expect(matCard.locator('mat-card-content').first()).toHaveCSS(
    'background-color',
    args.matCardContentBackgroundColor,
  );
}

async function buttonAssertions(
  page: Page,
  id: string,
  backgroundColor: string,
  color: string,
  text: string,
): Promise<void> {
  const button = page.locator(id);
  await expect(button).toHaveCSS('background-color', backgroundColor);
  await expect(button).toHaveCSS('color', color);
  await expect(button).toContainText(text);
}

export async function testMatButtonsBasic(page: Page, args: TestMatButtonsBasicArgs): Promise<void> {
  await expect(page.locator('#basic-label')).toHaveCSS('color', args.labelColor);
  await expect(page.locator('#basic-label')).toContainText('Basic');
  await buttonAssertions(page, '#basic-button', args.backgroundColor, args.basicColor, 'Basic');
  await buttonAssertions(page, '#basic-primary-button', args.backgroundColor, args.primaryColor, 'Primary');
  await buttonAssertions(page, '#basic-accent-button', args.backgroundColor, args.accentColor, 'Accent');
  await buttonAssertions(page, '#basic-warn-button', args.backgroundColor, args.warnColor, 'Warn');
  await buttonAssertions(page, '#basic-disabled-button', args.backgroundColor, args.disabledColor, 'Disabled');
  await buttonAssertions(page, '#basic-link-button', args.backgroundColor, args.basicColor, 'Link');
}

export async function testMatButtonsRaised(page: Page, args: TestMatButtonsRaisedArgs): Promise<void> {
  await expect(page.locator('#raised-label')).toHaveCSS('color', args.labelColor);
  await expect(page.locator('#raised-label')).toContainText('Raised');
  await buttonAssertions(page, '#raised-button', args.basicBackgroundColor, args.basicColor, 'Basic');
  await buttonAssertions(page, '#raised-primary-button', args.primaryBackgroundColor, args.primaryColor, 'Primary');
  await buttonAssertions(page, '#raised-accent-button', args.accentBackgroundColor, args.accentColor, 'Accent');
  await buttonAssertions(page, '#raised-warn-button', args.warnBackgroundColor, args.warnColor, 'Warn');
  await buttonAssertions(page, '#raised-disabled-button', args.disabledBackgroundColor, args.disabledColor, 'Disabled');
  await buttonAssertions(page, '#raised-link-button', args.basicBackgroundColor, args.basicColor, 'Link');
}

export async function testMatButtonsStroked(page: Page, args: TestMatButtonsBasicArgs): Promise<void> {
  await expect(page.locator('#stroked-label')).toHaveCSS('color', args.labelColor);
  await expect(page.locator('#stroked-label')).toContainText('Stroked');
  await buttonAssertions(page, '#stroked-button', args.backgroundColor, args.basicColor, 'Basic');
  await buttonAssertions(page, '#stroked-primary-button', args.backgroundColor, args.primaryColor, 'Primary');
  await buttonAssertions(page, '#stroked-accent-button', args.backgroundColor, args.accentColor, 'Accent');
  await buttonAssertions(page, '#stroked-warn-button', args.backgroundColor, args.warnColor, 'Warn');
  await buttonAssertions(page, '#stroked-disabled-button', args.backgroundColor, args.disabledColor, 'Disabled');
  await buttonAssertions(page, '#stroked-link-button', args.backgroundColor, args.basicColor, 'Link');
}

export async function testMatButtonsFlat(page: Page, args: TestMatButtonsRaisedArgs): Promise<void> {
  await expect(page.locator('#flat-label')).toHaveCSS('color', args.labelColor);
  await expect(page.locator('#flat-label')).toContainText('Flat');
  await buttonAssertions(page, '#flat-button', args.basicBackgroundColor, args.basicColor, 'Basic');
  await buttonAssertions(page, '#flat-primary-button', args.primaryBackgroundColor, args.primaryColor, 'Primary');
  await buttonAssertions(page, '#flat-accent-button', args.accentBackgroundColor, args.accentColor, 'Accent');
  await buttonAssertions(page, '#flat-warn-button', args.warnBackgroundColor, args.warnColor, 'Warn');
  await buttonAssertions(page, '#flat-disabled-button', args.disabledBackgroundColor, args.disabledColor, 'Disabled');
  await buttonAssertions(page, '#flat-link-button', args.basicBackgroundColor, args.basicColor, 'Link');
}

export async function testMatButtonsExtendedFab(page: Page, args: TestMatButtonsRaisedArgs): Promise<void> {
  await expect(page.locator('#extended-fab-label')).toHaveCSS('color', args.labelColor);
  await expect(page.locator('#extended-fab-label')).toContainText('Extended Fab');
  await buttonAssertions(page, '#extendedFabButton', args.basicBackgroundColor, args.basicColor, 'Basic');
  await buttonAssertions(
    page,
    '#extended-fab-primary-button',
    args.primaryBackgroundColor,
    args.primaryColor,
    'Primary',
  );
  await buttonAssertions(page, '#extended-fab-accent-button', args.accentBackgroundColor, args.accentColor, 'Accent');
  await buttonAssertions(page, '#extended-fab-warn-button', args.warnBackgroundColor, args.warnColor, 'Warn');
  await buttonAssertions(
    page,
    '#extended-fab-disabled-button',
    args.disabledBackgroundColor,
    args.disabledColor,
    'Disabled',
  );
  await buttonAssertions(page, '#extended-fab-link-button', args.basicBackgroundColor, args.basicColor, 'Link');
}

export async function testMatInput(page: Page, args: TestMatInputArgs): Promise<void> {
  await expect(page.locator('#favorite-food-label')).toHaveCSS('color', args.unfocusedColor);
  await page.locator('#favorite-food-input').click();
  await expect(page.locator('#favorite-food-label')).toHaveCSS('color', args.focusedColor);
}

export async function testMatCheckboxes(page: Page, args: TestMatCheckboxesArgs): Promise<void> {
  async function checkboxAssertions(id: string, backgroundColor: string): Promise<void> {
    await expect(page.locator(id).locator('.mdc-checkbox__background')).toHaveCSS('background-color', backgroundColor);
  }

  await checkboxAssertions('#check-me-checkbox', args.uncheckedColor);
  await page.locator('#check-me-checkbox').click();
  await checkboxAssertions('#check-me-checkbox', args.accentColor);

  await expect(page.locator('#disabled-checkbox').locator('input')).toBeDisabled();

  await page.locator('#indeterminate-checkbox').click();
  await checkboxAssertions('#primary-checkbox', args.primaryColor);
  await checkboxAssertions('#accent-checkbox', args.accentColor);
  await checkboxAssertions('#warn-checkbox', args.warnColor);
}

export async function testMatRadioButtons(page: Page, args: TestMatRadioButtonsArgs): Promise<void> {
  const option1Radio = page.locator('#option-1-radio');

  async function radioAssertions(
    backgroundColor: string,
    color: string,
    outerCircleBorderColor: string,
  ): Promise<void> {
    const background = option1Radio.locator('.mdc-radio__background');
    await expect(background).toHaveCSS('background-color', backgroundColor);
    await expect(background).toHaveCSS('color', color);

    const outerCircle = option1Radio.locator('.mdc-radio__outer-circle');
    await expect(outerCircle).toHaveCSS('background-color', backgroundColor);
    await expect(outerCircle).toHaveCSS('color', color);
    await expect(outerCircle).toHaveCSS('border-bottom-color', outerCircleBorderColor);
    await expect(outerCircle).toHaveCSS('border-left-color', outerCircleBorderColor);
    await expect(outerCircle).toHaveCSS('border-right-color', outerCircleBorderColor);
    await expect(outerCircle).toHaveCSS('border-top-color', outerCircleBorderColor);
  }

  await radioAssertions(args.backgroundColor, args.color, args.uncheckedOuterCircleBorderColor);
  await option1Radio.click();
  await radioAssertions(args.backgroundColor, args.color, args.colorWhenSelected);
}

export async function testMatSlideToggle(page: Page, args: TestMatSlideToggleArgs): Promise<void> {
  async function pseudoCssAssertions(uncheckedColor: string, checkedColor: string): Promise<void> {
    const track = page.locator('mat-slide-toggle .mdc-switch__track').first();

    const beforeColor = await track.evaluate((el) => {
      const win = el.ownerDocument.defaultView;
      return win?.getComputedStyle(el, '::before').getPropertyValue('background-color');
    });
    expect(beforeColor).toBe(uncheckedColor);

    const afterColor = await track.evaluate((el) => {
      const win = el.ownerDocument.defaultView;
      return win?.getComputedStyle(el, '::after').getPropertyValue('background-color');
    });
    expect(afterColor).toBe(checkedColor);
  }

  await pseudoCssAssertions(args.uncheckedColor, args.accentColor);

  await page.locator('#slide-toggle-primary-radio').click();
  await pseudoCssAssertions(args.uncheckedColor, args.primaryColor);

  await page.locator('#slide-toggle-warn-radio').click();
  await pseudoCssAssertions(args.uncheckedColor, args.warnColor);

  await page.locator('#slide-toggle-accent-radio').click();
  await pseudoCssAssertions(args.uncheckedColor, args.accentColor);
}
