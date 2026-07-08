export interface TestBackgroundArgs {
  backgroundColor: string | RegExp;
  color: string | RegExp;
}

export interface TestMatCardArgs {
  marCardBackgroundColor: string | RegExp;
  matCardContentBackgroundColor: string | RegExp;
}

export interface TestMatButtonsBasicArgs {
  labelColor: string | RegExp;
  basicColor: string | RegExp;
  primaryColor: string | RegExp;
  accentColor: string | RegExp;
  warnColor: string | RegExp;
  backgroundColor: string | RegExp;
  disabledColor: string | RegExp;
}

export interface TestMatButtonsRaisedArgs {
  labelColor: string | RegExp;
  basicBackgroundColor: string | RegExp;
  basicColor: string | RegExp;
  primaryBackgroundColor: string | RegExp;
  primaryColor: string | RegExp;
  accentBackgroundColor: string | RegExp;
  accentColor: string | RegExp;
  warnBackgroundColor: string | RegExp;
  warnColor: string | RegExp;
  disabledBackgroundColor: string | RegExp;
  disabledColor: string | RegExp;
}

export interface TestMatInputArgs {
  unfocusedColor: string | RegExp;
  focusedColor: string | RegExp;
}

export interface TestMatCheckboxesArgs {
  uncheckedColor: string | RegExp;
  primaryColor: string | RegExp;
  accentColor: string | RegExp;
  warnColor: string | RegExp;
}

export interface TestMatRadioButtonsArgs {
  backgroundColor: string | RegExp;
  color: string | RegExp;
  uncheckedOuterCircleBorderColor: string | RegExp;
  uncheckedInnerCircleBorderColor: string | RegExp;
  colorWhenSelected: string | RegExp;
}

export interface TestMatSlideToggleArgs {
  uncheckedColor: string;
  primaryColor: string;
  accentColor: string;
  warnColor: string;
}
