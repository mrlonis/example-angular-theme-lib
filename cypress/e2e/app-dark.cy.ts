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
  const basicColor = 'rgb(255, 255, 255)';
  const primaryColor = 'rgb(145, 205, 255)';
  const accentColor = 'rgb(249, 187, 115)';
  const warnColor = 'rgb(255, 180, 171)';
  const formFieldPrimaryColor = 'rgba(145, 205, 255, 0.87)';

  beforeEach(() => {
    mockPrefersColorScheme('dark');
    cy.visit('/');
  });

  it('Background should have theme colors', () => {
    testBackground('rgba(0, 0, 0, 0)', 'rgb(255, 255, 255)');
  });

  it('Mat Card should have theme colors', () => {
    testMatCard('rgb(66, 66, 66)', 'rgba(0, 0, 0, 0)');
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic(
      'rgb(255, 255, 255)',
      basicColor,
      primaryColor,
      accentColor,
      warnColor,
      'rgba(0, 0, 0, 0)',
      'rgba(255, 255, 255, 0.5)',
    );
  });

  it('Raised Buttons should have theme colors', () => {
    testMatButtonsRaised(
      'rgb(255, 255, 255)',
      basicColor,
      primaryColor,
      'rgb(0, 0, 0)',
      accentColor,
      'rgb(0, 0, 0)',
      warnColor,
      'rgb(0, 0, 0)',
      'rgb(66, 66, 66)',
      'rgba(255, 255, 255, 0.12)',
      'rgba(255, 255, 255, 0.5)',
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
      'rgba(255, 255, 255, 0.5)',
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
    testMatInput('rgba(255, 255, 255, 0.6)', formFieldPrimaryColor);
  });

  it('Checkboxes should have theme colors', () => {
    testMatCheckboxes('rgba(0, 0, 0, 0)', primaryColor, accentColor, warnColor);
  });

  it('Radio buttons should have theme colors', () => {
    testMatRadioButtons(
      'rgba(0, 0, 0, 0)',
      'rgb(255, 255, 255)',
      'rgba(255, 255, 255, 0.54)',
      accentColor,
      accentColor,
    );
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle('rgb(97, 97, 97)', 'rgb(0, 100, 150)', 'rgb(131, 84, 22)', 'rgb(186, 26, 26)');
  });
});
