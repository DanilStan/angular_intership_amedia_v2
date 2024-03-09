import { Observable } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'

import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms'

import { FeedbackEmailService } from 'src/app/core/services/feedback-email.service'

export const isEmptyInputValue = (value: []): boolean => value === null || value === undefined || value?.length === 0

export class FeedbackEmailValidator {
  static checkEmailOnServer(service: FeedbackEmailService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return service.checkIfUsernameExists(control.value).pipe(
        debounceTime(500),
        map((result) => (!result ? { usernameAlreadyExists: true } : null)),
      )
    }
  }

  static email(control: AbstractControl): { [key: string]: boolean } | null {
    if (isEmptyInputValue(control.value)) {
      return null
    }

    const regex = /^[^@\s]+@[^@\s]+\.\S{2,}$/

    const v: string = control.value

    return regex.test(v) ? null : { emailValid: true }
  }
}
