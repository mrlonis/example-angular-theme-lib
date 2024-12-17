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
    testBackground({ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(255, 255, 255)' });
  });

  it('Mat Card should have theme colors', () => {
    testMatCard({ marCardBackgroundColor: 'rgb(16, 20, 23)', matCardContentBackgroundColor: 'rgba(0, 0, 0, 0)' });
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic({
      labelColor: 'rgb(255, 255, 255)',
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: 'rgba(224, 226, 231, 0.38)',
    });
  });

  it('Raised Buttons should have theme colors', () => {
    testMatButtonsRaised({
      labelColor: 'rgb(255, 255, 255)',
      basicColor: basicColor,
      primaryBackgroundColor: 'rgb(16, 20, 23)',
      primaryColor: primaryColor,
      accentBackgroundColor: 'rgb(16, 20, 23)',
      accentColor: accentColor,
      warnBackgroundColor: 'rgb(16, 20, 23)',
      warnColor: warnColor,
      backgroundColor: 'rgb(16, 20, 23)',
      disabledBackgroundColor: 'rgba(224, 226, 231, 0.12)',
      disabledColor: 'rgba(224, 226, 231, 0.38)',
    });
  });

  it('Stroked Buttons should have theme colors', () => {
    testMatButtonsStroked({
      labelColor: 'rgb(255, 255, 255)',
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: 'rgba(224, 226, 231, 0.38)',
    });
  });

  it('Flat Buttons should have theme colors', () => {
    testMatButtonsFlat({
      labelColor: 'rgb(255, 255, 255)',
      basicColor: 'rgb(0, 51, 80)',
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(0, 51, 80)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(72, 42, 0)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(105, 0, 5)',
      backgroundColor: basicColor,
      disabledBackgroundColor: 'rgba(224, 226, 231, 0.12)',
      disabledColor: 'rgba(224, 226, 231, 0.38)',
    });
  });

  it('Extended FAB Buttons should have theme colors', () => {
    testMatButtonsExtendedFab({
      labelColor: 'rgb(255, 255, 255)',
      basicBackgroundColor: 'rgb(102, 61, 0)',
      basicColor: 'rgb(255, 221, 186)',
      primaryBackgroundColor: 'rgb(0, 75, 114)',
      primaryColor: 'rgb(204, 229, 255)',
      accentBackgroundColor: 'rgb(102, 61, 0)',
      accentColor: 'rgb(255, 221, 186)',
      warnBackgroundColor: 'rgb(0, 75, 114)',
      warnColor: 'rgb(204, 229, 255)',
      disabledBackgroundColor: 'rgba(224, 226, 231, 0.12)',
      disabledColor: 'rgba(224, 226, 231, 0.38)',
    });
  });

  it('Inputs should have theme colors', () => {
    testMatInput({ initialColor: 'rgb(220, 227, 237)', primaryColor: primaryColor });
  });

  it('Checkboxes should have theme colors', () => {
    testMatCheckboxes({
      uncheckedColor: 'rgba(0, 0, 0, 0)',
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
    });
  });

  it('Radio buttons should have theme colors', () => {
    testMatRadioButtons({
      backgroundColor: 'rgba(0, 0, 0, 0)',
      uncheckedColor: 'rgb(224, 226, 231)',
      uncheckedOuterCircleBorderColor: 'rgb(220, 227, 237)',
      uncheckedInnerCircleBorderColor: 'rgb(224, 226, 231)',
      accentColor: accentColor,
    });
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle({
      backgroundColor: 'rgb(64, 72, 79)',
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
    });
  });
});
