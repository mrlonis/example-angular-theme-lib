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
  const basicColor = 'rgb(0, 0, 0)';
  const primaryColor = 'rgb(131, 84, 22)';
  const accentColor = 'rgb(0, 100, 150)';
  const warnColor = 'rgb(186, 26, 26)';
  const formFieldPrimaryColor = 'rgba(131, 84, 22, 0.87)';

  beforeEach(() => {
    mockPrefersColorScheme('light');
    cy.visit('/');
  });

  it('Background should have theme colors', () => {
    testBackground('rgba(0, 0, 0, 0)', 'rgb(0, 0, 0)');
  });

  it('Mat Card should have theme colors', () => {
    testMatCard('rgb(255, 255, 255)', 'rgba(0, 0, 0, 0)');
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic(
      'rgb(0, 0, 0)',
      basicColor,
      primaryColor,
      accentColor,
      warnColor,
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.38)',
    );
  });

  it('Raised Buttons should have theme colors', () => {
    testMatButtonsRaised(
      'rgb(0, 0, 0)',
      basicColor,
      primaryColor,
      'rgb(255, 255, 255)',
      accentColor,
      'rgb(255, 255, 255)',
      warnColor,
      'rgb(255, 255, 255)',
      'rgb(255, 255, 255)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(0, 0, 0, 0.38)',
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
      'rgba(0, 0, 0, 0.38)',
    );
  });

  it('Flat Buttons should have theme colors', () => {
    testMatButtonsFlat(
      'rgb(0, 0, 0)',
      basicColor,
      primaryColor,
      'rgb(255, 255, 255)',
      accentColor,
      'rgb(255, 255, 255)',
      warnColor,
      'rgb(255, 255, 255)',
      'rgb(255, 255, 255)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(0, 0, 0, 0.38)',
    );
  });

  it('Extended FAB Buttons should have theme colors', () => {
    testMatButtonsExtendedFab(
      'rgb(0, 0, 0)',
      accentColor,
      'rgb(255, 255, 255)',
      primaryColor,
      'rgb(255, 255, 255)',
      accentColor,
      'rgb(255, 255, 255)',
      warnColor,
      'rgb(255, 255, 255)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(0, 0, 0, 0.38)',
    );
  });

  it('Inputs should have theme colors', () => {
    testMatInput('rgba(0, 0, 0, 0.6)', formFieldPrimaryColor);
  });

  it('Checkboxes should have theme colors', () => {
    testMatCheckboxes('rgba(0, 0, 0, 0)', primaryColor, accentColor, warnColor);
  });

  it('Radio buttons should have theme colors', () => {
    testMatRadioButtons(
      'rgba(0, 0, 0, 0)',
      'rgba(0, 0, 0, 0.87)',
      'rgba(0, 0, 0, 0.54)',
      'rgb(0, 100, 150)',
      accentColor,
    );
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle('rgb(224, 224, 224)', 'rgb(218, 160, 91)', 'rgb(101, 178, 237)', 'rgb(255, 137, 125)');
  });
});
