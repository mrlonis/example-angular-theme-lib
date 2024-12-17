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

  beforeEach(() => {
    mockPrefersColorScheme('light');
    cy.visit('/');
  });

  it('Background should have theme colors', () => {
    testBackground({ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 0, 0)' });
  });

  it('Mat Card should have theme colors', () => {
    testMatCard({ marCardBackgroundColor: 'rgb(255, 255, 255)', matCardContentBackgroundColor: 'rgba(0, 0, 0, 0)' });
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic({
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: 'rgba(0, 0, 0, 0.38)',
    });
  });

  it('Raised Buttons should have theme colors', () => {
    testMatButtonsRaised({
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(255, 255, 255)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(255, 255, 255)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(255, 255, 255)',
      disabledBackgroundColor: 'rgba(0, 0, 0, 0.12)',
      disabledColor: 'rgba(0, 0, 0, 0.38)',
    });
  });

  it('Stroked Buttons should have theme colors', () => {
    testMatButtonsStroked({
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: 'rgba(0, 0, 0, 0.38)',
    });
  });

  it('Flat Buttons should have theme colors', () => {
    testMatButtonsFlat({
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(255, 255, 255)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(255, 255, 255)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(255, 255, 255)',
      backgroundColor: 'rgb(255, 255, 255)',
      disabledBackgroundColor: 'rgba(0, 0, 0, 0.12)',
      disabledColor: 'rgba(0, 0, 0, 0.38)',
    });
  });

  it('Extended FAB Buttons should have theme colors', () => {
    testMatButtonsExtendedFab({
      labelColor: 'rgb(0, 0, 0)',
      basicBackgroundColor: accentColor,
      basicColor: 'rgb(255, 255, 255)',
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(255, 255, 255)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(255, 255, 255)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(255, 255, 255)',
      disabledBackgroundColor: 'rgba(0, 0, 0, 0.12)',
      disabledColor: 'rgba(0, 0, 0, 0.38)',
    });
  });

  it('Inputs should have theme colors', () => {
    testMatInput({ initialColor: 'rgba(0, 0, 0, 0.6)', primaryColor: 'rgba(131, 84, 22, 0.87)' });
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
      uncheckedColor: 'rgba(0, 0, 0, 0.87)',
      uncheckedOuterCircleBorderColor: 'rgba(0, 0, 0, 0.54)',
      uncheckedInnerCircleBorderColor: 'rgb(0, 100, 150)',
      accentColor: accentColor,
    });
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle({
      backgroundColor: 'rgb(224, 224, 224)',
      primaryColor: 'rgb(218, 160, 91)',
      accentColor: 'rgb(101, 178, 237)',
      warnColor: 'rgb(255, 137, 125)',
    });
  });
});
