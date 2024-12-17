export interface TestBackgroundArgs {
  backgroundColor: string;
  color: string;
}

export interface TestMatCardArgs {
  marCardBackgroundColor: string;
  matCardContentBackgroundColor: string;
}

export interface TestMatButtonsBasicArgs {
  labelColor: string;
  basicColor: string;
  primaryColor: string;
  accentColor: string;
  warnColor: string;
  backgroundColor: string;
  disabledColor: string;
}

export interface TestMatButtonsRaisedArgs {
  labelColor: string;
  basicBackgroundColor: string;
  basicColor: string;
  primaryBackgroundColor: string;
  primaryColor: string;
  accentBackgroundColor: string;
  accentColor: string;
  warnBackgroundColor: string;
  warnColor: string;
  disabledBackgroundColor: string;
  disabledColor: string;
}

export interface TestMatInputArgs {
  unfocusedColor: string;
  focusedColor: string;
}

export interface TestMatCheckboxesArgs {
  uncheckedColor: string;
  primaryColor: string;
  accentColor: string;
  warnColor: string;
}

export interface TestMatRadioButtonsArgs {
  backgroundColor: string;
  color: string;
  uncheckedOuterCircleBorderColor: string;
  uncheckedInnerCircleBorderColor: string;
  colorWhenSelected: string;
}

export interface TestMatSlideToggleArgs {
  uncheckedColor: string;
  primaryColor: string;
  accentColor: string;
  warnColor: string;
}
