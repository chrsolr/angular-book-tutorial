import { FormControl } from '@angular/forms'

export class PasswordValidator {
  static cannotContainSpacde(formControl: FormControl) {
    if (formControl.value.indexOf(' ') >= 0) {
      return { cannotContainSpace: true }
    }
    return null
  }
}

export class UsernameValidator {
  static cannotContainSpacde(formControl: FormControl) {
    if (formControl.value.indexOf(' ') >= 0) {
      return { cannotContainSpace: true }
    }
    return null
  }
}