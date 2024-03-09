import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, inject } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { BaseFormComponent } from 'src/app/core/abstracts/base-form.component'
import { FeedbackData } from 'src/app/core/interfaces/page'
import { UsernameValidationService } from 'src/app/core/services/username.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent extends BaseFormComponent {
  // formGroup: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.email, Validators.required, this.usernameService.usernameValidator()]),
  // })

  formGroup: FormGroup = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required], [this.usernameService.usernameValidator()]],
  })
  closeResult = ''
  override isResetIsSuccess = false
  private modalService = inject(NgbModal)

  constructor(
    private http: HttpClient,
    protected formBuilder: FormBuilder,
    protected elementRef: ElementRef,
    private usernameService: UsernameValidationService,
  ) {
    super()
  }

  prepareRequest(): Observable<FeedbackData> {
    return this.http.post<FeedbackData>('https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/create', this.formGroup.value)
  }

  open(content: TemplateRef<Element>): void {
    if (this.isSuccess) {
      this.modalService
        .open(content, { centered: true })
        .result.then(
          (result) => {
            return (this.closeResult = `Closed with: ${result}`)
          },
          (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
          },
        )
        .catch((error) => {
          throw new Error(error)
        })
    }
  }

  private getDismissReason(reason: number): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC'
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop'
      default:
        return `with: ${reason}`
    }
  }
}
