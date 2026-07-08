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

test.describe('example-theme-app: light theme', () => {
  const basicColor = 'rgb(131, 84, 22)';
  const primaryColor = 'rgb(131, 84, 22)';
  const accentColor = 'rgb(0, 100, 150)';
  const warnColor = 'rgb(186, 26, 26)';

  test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
  });

  test('Background should have theme colors', async ({ page }) => {
    await testBackground(page, {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgb(0, 0, 0)',
    });
  });

  test('Mat Card should have theme colors', async ({ page }) => {
    await testMatCard(page, {
      marCardBackgroundColor: 'rgb(247, 249, 254)',
      matCardContentBackgroundColor: 'rgba(0, 0, 0, 0)',
    });
  });

  test('Basic Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsBasic(page, {
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  test('Raised Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsRaised(page, {
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryBackgroundColor: 'rgb(247, 249, 254)',
      primaryColor: primaryColor,
      accentBackgroundColor: 'rgb(247, 249, 254)',
      accentColor: accentColor,
      warnBackgroundColor: 'rgb(247, 249, 254)',
      warnColor: warnColor,
      basicBackgroundColor: 'rgb(247, 249, 254)',
      disabledBackgroundColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  test('Stroked Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsStroked(page, {
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  test('Flat Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsFlat(page, {
      labelColor: 'rgb(0, 0, 0)',
      basicColor: 'rgb(255, 255, 255)',
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(255, 255, 255)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(255, 255, 255)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(255, 255, 255)',
      basicBackgroundColor: basicColor,
      disabledBackgroundColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  test('Extended FAB Buttons should have theme colors', async ({ page }) => {
    await testMatButtonsExtendedFab(page, {
      labelColor: 'rgb(0, 0, 0)',
      basicBackgroundColor: 'rgb(204, 229, 255)',
      basicColor: 'rgb(0, 75, 114)',
      primaryBackgroundColor: 'rgb(255, 221, 186)',
      primaryColor: 'rgb(102, 61, 0)',
      accentBackgroundColor: 'rgb(204, 229, 255)',
      accentColor: 'rgb(0, 75, 114)',
      warnBackgroundColor: 'rgb(255, 221, 186)',
      warnColor: 'rgb(102, 61, 0)',
      disabledBackgroundColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  test('Inputs should have theme colors', async ({ page }) => {
    await testMatInput(page, {
      unfocusedColor: 'rgb(64, 72, 79)',
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
      color: 'rgb(24, 28, 32)',
      uncheckedOuterCircleBorderColor: 'rgb(64, 72, 79)',
      uncheckedInnerCircleBorderColor: 'rgb(24, 28, 32)',
      colorWhenSelected: accentColor,
    });
  });

  test('Slide Toggle should have theme colors', async ({ page }) => {
    await testMatSlideToggle(page, {
      uncheckedColor: 'rgb(220, 227, 237)',
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
    });
  });
});
