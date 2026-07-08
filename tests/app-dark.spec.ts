import { test } from '@playwright/test';
import {
  testBackground,
  testMatButtonsBasic,
  testMatButtonsExtendedFab,
  testMatButtonsFlat,
  testMatButtonsRaised,
  testMatButtonsStroked,
  testMatCard,
  testMatCheckboxes,
  testMatInput,
  testMatRadioButtons,
  testMatSlideToggle,
} from './fixtures';

test.describe('example-theme-app: dark theme', () => {
  const basicColor = 'rgb(145, 205, 255)';
  const primaryColor = 'rgb(145, 205, 255)';
  const accentColor = 'rgb(249, 187, 115)';
  const warnColor = 'rgb(255, 180, 171)';
  const disabledColor = 'color(srgb 0.878431 0.886275 0.905882 / 0.38)';
  const disabledBackgroundColor = 'color(srgb 0.878431 0.886275 0.905882 / 0.12)';
  // Firefox resolves dark theme text as rgb(251,251,254) rather than pure white; both are correct
  const nearWhite = /rgb\(25[0-5], 25[0-5], 25[0-5]\)/;

  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
  });

  test('Background should have theme colors', async ({ page }) => {
    await testBackground(page, {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: nearWhite,
    });
  });

  test('Mat Card should have theme colors', async ({ page }) => {
    await testMatCard(page, {
      marCardBackgroundColor: 'rgb(16, 20, 23)',
      matCardContentBackgroundColor: 'rgba(0, 0, 0, 0)',
    });
  });

  test('Basic Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsBasic(page, {
      labelColor: nearWhite,
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: disabledColor,
    });
  });

  test('Raised Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsRaised(page, {
      labelColor: nearWhite,
      basicColor: basicColor,
      primaryBackgroundColor: 'rgb(16, 20, 23)',
      primaryColor: primaryColor,
      accentBackgroundColor: 'rgb(16, 20, 23)',
      accentColor: accentColor,
      warnBackgroundColor: 'rgb(16, 20, 23)',
      warnColor: warnColor,
      basicBackgroundColor: 'rgb(16, 20, 23)',
      disabledBackgroundColor: disabledBackgroundColor,
      disabledColor: disabledColor,
    });
  });

  test('Stroked Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsStroked(page, {
      labelColor: nearWhite,
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: disabledColor,
    });
  });

  test('Flat Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsFlat(page, {
      labelColor: nearWhite,
      basicColor: 'rgb(0, 51, 80)',
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(0, 51, 80)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(72, 42, 0)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(105, 0, 5)',
      basicBackgroundColor: basicColor,
      disabledBackgroundColor: disabledBackgroundColor,
      disabledColor: disabledColor,
    });
  });

  test('Extended FAB Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsExtendedFab(page, {
      labelColor: nearWhite,
      basicBackgroundColor: 'rgb(102, 61, 0)',
      basicColor: 'rgb(255, 221, 186)',
      primaryBackgroundColor: 'rgb(0, 75, 114)',
      primaryColor: 'rgb(204, 229, 255)',
      accentBackgroundColor: 'rgb(102, 61, 0)',
      accentColor: 'rgb(255, 221, 186)',
      warnBackgroundColor: 'rgb(0, 75, 114)',
      warnColor: 'rgb(204, 229, 255)',
      disabledBackgroundColor: disabledBackgroundColor,
      disabledColor: disabledColor,
    });
  });

  test('Inputs should have theme colors', async ({ page }) => {
    await testMatInput(page, {
      unfocusedColor: 'rgb(220, 227, 237)',
      focusedColor: primaryColor,
    });
  });

  test('Checkboxes should have theme colors', async ({ page }) => {
    await testMatCheckboxes(page, {
      uncheckedColor: 'rgba(0, 0, 0, 0)',
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
    });
  });

  test('Radio buttons should have theme colors', async ({ page }) => {
    await testMatRadioButtons(page, {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgb(224, 226, 231)',
      uncheckedOuterCircleBorderColor: 'rgb(220, 227, 237)',
      uncheckedInnerCircleBorderColor: 'rgb(224, 226, 231)',
      colorWhenSelected: accentColor,
    });
  });

  test('Slide Toggle should have theme colors', async ({ page }) => {
    await testMatSlideToggle(page, {
      uncheckedColor: 'rgb(64, 72, 79)',
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
    });
  });
});
