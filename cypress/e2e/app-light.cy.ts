import {
  mockPrefersColorScheme,
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
} from '../fixtures';

describe('example-theme-app: light theme', () => {
  const basicColor = 'rgb(131, 84, 22)';
  const primaryColor = 'rgb(131, 84, 22)';
  const accentColor = 'rgb(0, 100, 150)';
  const warnColor = 'rgb(186, 26, 26)';

  beforeEach(() => {
    mockPrefersColorScheme('light');
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
    testMatButtonsRaised(
      'rgb(0, 0, 0)',
      basicColor,
      'rgb(247, 249, 254)',
      primaryColor,
      'rgb(247, 249, 254)',
      accentColor,
      'rgb(247, 249, 254)',
      warnColor,
      'rgb(247, 249, 254)',
      'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    );
  });

  it('Stroked Buttons should have theme colors', () => {
    testMatButtonsStroked(
      'rgb(0, 0, 0)',
      basicColor,
      primaryColor,
      accentColor,
      warnColor,
      'rgba(0, 0, 0, 0)',
      'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    );
  });

  it('Flat Buttons should have theme colors', () => {
    testMatButtonsFlat(
      'rgb(0, 0, 0)',
      'rgb(255, 255, 255)',
      primaryColor,
      'rgb(255, 255, 255)',
      accentColor,
      'rgb(255, 255, 255)',
      warnColor,
      'rgb(255, 255, 255)',
      basicColor,
      'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    );
  });

  it('Extended FAB Buttons should have theme colors', () => {
    testMatButtonsExtendedFab(
      'rgb(0, 0, 0)',
      'rgb(204, 229, 255)',
      'rgb(0, 30, 49)',
      'rgb(255, 221, 186)',
      'rgb(43, 23, 0)',
      'rgb(204, 229, 255)',
      'rgb(0, 30, 49)',
      'rgb(255, 221, 186)',
      'rgb(43, 23, 0)',
      'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    );
  });

  it('Inputs should have theme colors', () => {
    testMatInput('rgb(64, 72, 79)', primaryColor);
  });

  it('Checkboxes should have theme colors', () => {
    testMatCheckboxes('rgba(0, 0, 0, 0)', primaryColor, accentColor, warnColor);
  });

  it('Radio buttons should have theme colors', () => {
    testMatRadioButtons('rgba(0, 0, 0, 0)', 'rgb(24, 28, 32)', 'rgb(64, 72, 79)', 'rgb(24, 28, 32)', accentColor);
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle('rgb(220, 227, 237)', primaryColor, accentColor, warnColor);
  });
});
