export const blueprint = {
  $formkit: 'primeInputText',
  name: 'field',
  options: [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }],
}

export const formkitPreset = [{
  $formkit: 'primeInputText',
  name: 'email',
  label: 'Email',
  help: 'This will be used for your account.',
  validation: 'required|email',
}, {
  $formkit: 'primeTextarea',
  name: 'myText',
  label: 'Text',
  validation: '',
  rows: '3',
}, {
  $formkit: 'primePassword',
  name: 'password',
  label: 'Password',
  help: 'Enter your new password.',
  validation: 'required|length:5,16',
  feedback: true,
}, {
  $formkit: 'primePassword',
  name: 'password_confirm',
  label: 'Confirm password',
  help: 'Enter your new password again.',
  validation: 'required|confirm',
  validationLabel: 'password confirmation',
}, {
  $formkit: 'primeCheckbox',
  name: 'eu_citizen',
  id: 'eu',
  label: 'Are you a european citizen?',
}, {
  $formkit: 'primeSelect',
  if: '$get(eu).value', // 👀 Oooo, conditionals!
  name: 'cookie_notice',
  label: 'Cookie notice frequency',
  optionLabel: 'label',
  optionValue: 'value',
  help: 'How often should we display a cookie notice?',
}]
