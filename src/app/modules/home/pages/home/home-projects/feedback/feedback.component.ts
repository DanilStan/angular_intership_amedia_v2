import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs'

import { feedbackEmailValidator } from './feedback-validator'

import { HttpClient } from '@angular/common/http'
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { BaseFormComponent } from 'src/app/core/abstracts/base-form.component'
import { FeedbackData } from 'src/app/core/interfaces/page'
import { feedbackEmailService } from 'src/app/core/services/feedback-email.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent extends BaseFormComponent implements OnInit {
  @ViewChild('content') content!: TemplateRef<any>
  @ViewChild('contentFail') contentFail!: TemplateRef<any>

  override formGroup: FormGroup = this.formBuilder.group({
    email: [
      null,
      [Validators.required, Validators.email, feedbackEmailValidator.email],
      [feedbackEmailValidator.checkEmailOnServer(this.feedbackEmailService)],
    ],
  })
  closeResult = ''
  override isResetIsSuccess = false
  private modalService = inject(NgbModal)

  constructor(
    private http: HttpClient,
    protected formBuilder: FormBuilder,
    protected elementRef: ElementRef,
    private feedbackEmailService: feedbackEmailService,
  ) {
    super()
  }

  override ngOnInit(): void {
    this.sentSuccess.subscribe(() => this.open(this.content))
    this.sentFailed.subscribe(() => this.open(this.contentFail))
  }

  prepareRequest(): Observable<FeedbackData> {
    return this.feedbackEmailService.sendEmail(this.formGroup.value)
  }

  open(content: TemplateRef<Element>): void {
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
