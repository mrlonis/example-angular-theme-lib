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
    testBackground({ backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(0, 0, 0)' });
  });

  it('Mat Card should have theme colors', () => {
    testMatCard({ marCardBackgroundColor: 'rgb(247, 249, 254)', matCardContentBackgroundColor: 'rgba(0, 0, 0, 0)' });
  });

  it('Basic Buttons should have theme colors', () => {
    testMatButtonsBasic({
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  it('Raised Buttons should have theme colors', () => {
    testMatButtonsRaised({
      labelColor: 'rgb(0, 0, 0)',
      basicColor: basicColor,
      primaryBackgroundColor: 'rgb(247, 249, 254)',
      primaryColor: primaryColor,
      accentBackgroundColor: 'rgb(247, 249, 254)',
      accentColor: accentColor,
      warnBackgroundColor: 'rgb(247, 249, 254)',
      warnColor: warnColor,
      backgroundColor: 'rgb(247, 249, 254)',
      disabledBackgroundColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
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
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  it('Flat Buttons should have theme colors', () => {
    testMatButtonsFlat({
      labelColor: 'rgb(0, 0, 0)',
      basicColor: 'rgb(255, 255, 255)',
      primaryBackgroundColor: primaryColor,
      primaryColor: 'rgb(255, 255, 255)',
      accentBackgroundColor: accentColor,
      accentColor: 'rgb(255, 255, 255)',
      warnBackgroundColor: warnColor,
      warnColor: 'rgb(255, 255, 255)',
      backgroundColor: basicColor,
      disabledBackgroundColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  it('Extended FAB Buttons should have theme colors', () => {
    testMatButtonsExtendedFab({
      labelColor: 'rgb(0, 0, 0)',
      basicBackgroundColor: 'rgb(204, 229, 255)',
      basicColor: 'rgb(0, 30, 49)',
      primaryBackgroundColor: 'rgb(255, 221, 186)',
      primaryColor: 'rgb(43, 23, 0)',
      accentBackgroundColor: 'rgb(204, 229, 255)',
      accentColor: 'rgb(0, 30, 49)',
      warnBackgroundColor: 'rgb(255, 221, 186)',
      warnColor: 'rgb(43, 23, 0)',
      disabledBackgroundColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.12)',
      disabledColor: 'color(srgb 0.0941176 0.109804 0.12549 / 0.38)',
    });
  });

  it('Inputs should have theme colors', () => {
    testMatInput({ initialColor: 'rgb(64, 72, 79)', primaryColor: primaryColor });
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
      uncheckedColor: 'rgb(24, 28, 32)',
      uncheckedOuterCircleBorderColor: 'rgb(64, 72, 79)',
      uncheckedInnerCircleBorderColor: 'rgb(24, 28, 32)',
      accentColor: accentColor,
    });
  });

  it('Slide Toggle should have theme colors', () => {
    testMatSlideToggle({
      backgroundColor: 'rgb(220, 227, 237)',
      primaryColor: primaryColor,
      accentColor: accentColor,
      warnColor: warnColor,
    });
  });
});
