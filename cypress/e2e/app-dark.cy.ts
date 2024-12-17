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

  beforeEach(() => {
    mockPrefersColorScheme('dark');
    cy.visit('/');
  });

  it('Background should have theme colors', () => {
    testBackground({
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgb(255, 255, 255)',
    });
  });

  it('Mat Card should have theme colors', () => {
    testMatCard({
      marCardBackgroundColor: 'rgb(66, 66, 66)',
      matCardContentBackgroundColor: 'rgba(0, 0, 0, 0)',
    });
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic({
      labelColor: 'rgb(255, 255, 255)',
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: 'rgba(255, 255, 255, 0.5)',
    });
  });

  it('Raised Buttons should have theme colors', () => {
    testMatButtonsRaised({
      labelColor: 'rgb(255, 255, 255)',
      basicColor: basicColor,
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(0, 51, 80)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(72, 42, 0)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(105, 0, 5)',
      basicBackgroundColor: 'rgb(66, 66, 66)',
      disabledBackgroundColor: 'rgba(255, 255, 255, 0.12)',
      disabledColor: 'rgba(255, 255, 255, 0.5)',
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
      disabledColor: 'rgba(255, 255, 255, 0.5)',
    });
  });

  it('Flat Buttons should have theme colors', () => {
    testMatButtonsFlat({
      labelColor: 'rgb(255, 255, 255)',
      basicColor: basicColor,
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(0, 51, 80)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(72, 42, 0)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(105, 0, 5)',
      basicBackgroundColor: 'rgb(66, 66, 66)',
      disabledBackgroundColor: 'rgba(255, 255, 255, 0.12)',
      disabledColor: 'rgba(255, 255, 255, 0.5)',
    });
  });

  it('Extended FAB Buttons should have theme colors', () => {
    testMatButtonsExtendedFab({
      labelColor: 'rgb(255, 255, 255)',
      basicBackgroundColor: accentColor,
      basicColor: 'rgb(72, 42, 0)',
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(0, 51, 80)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(72, 42, 0)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(105, 0, 5)',
      disabledBackgroundColor: 'rgba(255, 255, 255, 0.12)',
      disabledColor: 'rgba(255, 255, 255, 0.5)',
    });
  });

  it('Inputs should have theme colors', () => {
    testMatInput({
      unfocusedColor: 'rgba(255, 255, 255, 0.6)',
      focusedColor: 'rgba(145, 205, 255, 0.87)',
    });
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
      color: 'rgb(255, 255, 255)',
      uncheckedOuterCircleBorderColor: 'rgba(255, 255, 255, 0.54)',
      uncheckedInnerCircleBorderColor: accentColor,
      colorWhenSelected: accentColor,
    });
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle({
      uncheckedColor: 'rgb(97, 97, 97)',
      primaryColor: 'rgb(0, 100, 150)',
      accentColor: 'rgb(131, 84, 22)',
      warnColor: 'rgb(186, 26, 26)',
    });
  });
});
