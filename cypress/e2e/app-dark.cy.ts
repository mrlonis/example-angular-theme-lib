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

describe('example-theme-app: dark theme', () => {
  const basicColor = 'rgb(145, 205, 255)';
  const primaryColor = 'rgb(145, 205, 255)';
  const accentColor = 'rgb(249, 187, 115)';
  const warnColor = 'rgb(255, 180, 171)';

  beforeEach(() => {
    mockPrefersColorScheme('dark');
    cy.visit('/');
  });

  it('Background should have theme colors', () => {
    testBackground('rgba(0, 0, 0, 0)', 'rgb(255, 255, 255)');
  });

  it('Mat Card should have theme colors', () => {
    testMatCard('rgb(16, 20, 23)', 'rgba(0, 0, 0, 0)');
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic(
      'rgb(255, 255, 255)',
      basicColor,
      primaryColor,
      accentColor,
      warnColor,
      'rgba(0, 0, 0, 0)',
      'rgba(224, 226, 231, 0.38)',
    );
  });

  it('Raised Buttons should have theme colors', () => {
    testMatButtonsRaised(
      'rgb(255, 255, 255)',
      basicColor,
      'rgb(16, 20, 23)',
      primaryColor,
      'rgb(16, 20, 23)',
      accentColor,
      'rgb(16, 20, 23)',
      warnColor,
      'rgb(16, 20, 23)',
      'rgba(224, 226, 231, 0.12)',
      'rgba(224, 226, 231, 0.38)',
    );
  });

  it('Stroked Buttons should have theme colors', () => {
    testMatButtonsStroked(
      'rgb(255, 255, 255)',
      basicColor,
      primaryColor,
      accentColor,
      warnColor,
      'rgba(0, 0, 0, 0)',
      'rgba(224, 226, 231, 0.38)',
    );
  });

  it('Flat Buttons should have theme colors', () => {
    testMatButtonsFlat(
      'rgb(255, 255, 255)',
      'rgb(0, 51, 80)',
      primaryColor,
      'rgb(0, 51, 80)',
      accentColor,
      'rgb(72, 42, 0)',
      warnColor,
      'rgb(105, 0, 5)',
      basicColor,
      'rgba(224, 226, 231, 0.12)',
      'rgba(224, 226, 231, 0.38)',
    );
  });

  it('Extended FAB Buttons should have theme colors', () => {
    testMatButtonsExtendedFab(
      'rgb(255, 255, 255)',
      'rgb(102, 61, 0)',
      'rgb(255, 221, 186)',
      'rgb(0, 75, 114)',
      'rgb(204, 229, 255)',
      'rgb(102, 61, 0)',
      'rgb(255, 221, 186)',
      'rgb(0, 75, 114)',
      'rgb(204, 229, 255)',
      'rgba(224, 226, 231, 0.12)',
      'rgba(224, 226, 231, 0.38)',
    );
  });

  it('Inputs should have theme colors', () => {
    testMatInput('rgb(220, 227, 237)', primaryColor);
  });

  it('Checkboxes should have theme colors', () => {
    testMatCheckboxes('rgba(0, 0, 0, 0)', primaryColor, accentColor, warnColor);
  });

  it('Radio buttons should have theme colors', () => {
    testMatRadioButtons(
      'rgba(0, 0, 0, 0)',
      'rgb(224, 226, 231)',
      'rgb(220, 227, 237)',
      'rgb(224, 226, 231)',
      accentColor,
    );
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle('rgb(64, 72, 79)', primaryColor, accentColor, warnColor);
  });
});
