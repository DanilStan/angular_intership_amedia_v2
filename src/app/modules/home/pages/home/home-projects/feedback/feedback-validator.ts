import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms'
import { Observable } from 'rxjs'
import { debounceTime, map, tap } from 'rxjs/operators'
import { feedbackEmailService } from 'src/app/core/services/feedback-email.service'

export const isEmptyInputValue = (value: []): boolean => value == null || value === undefined || value?.length === 0

export class feedbackEmailValidator {
  static checkEmailOnServer(service: feedbackEmailService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
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
