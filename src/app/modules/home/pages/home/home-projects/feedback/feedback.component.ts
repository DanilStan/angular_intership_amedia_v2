import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Observable } from 'rxjs'

import { FeedbackEmailValidator } from './feedback-validator'

import { animate, style, transition, trigger } from '@angular/animations'
import { Component, ElementRef, OnInit, TemplateRef, ViewChild, inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { BaseFormComponent } from 'src/app/core/abstracts/base-form.component'
import { FeedbackData } from 'src/app/core/interfaces/page'
import { FeedbackEmailService } from 'src/app/core/services/feedback-email.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(
          '0.3s ease-in',
          style({
            opacity: 1,
          }),
        ),
      ]),
    ]),
  ],
})
export class FeedbackComponent extends BaseFormComponent implements OnInit {
  @ViewChild('content') content!: TemplateRef<HTMLDivElement>
  @ViewChild('contentFail') contentFail!: TemplateRef<HTMLDivElement>

  override formGroup: FormGroup = this.formBuilder.group({
    email: [
      null,
      [Validators.required, Validators.email, FeedbackEmailValidator.email],
      // [FeedbackEmailValidator.checkEmailOnServer(this.feedbackEmailService)],
    ],
  })
  closeResult = ''
  private modalService = inject(NgbModal)

  constructor(protected formBuilder: FormBuilder, protected elementRef: ElementRef, private feedbackEmailService: FeedbackEmailService) {
    super()
  }

  override ngOnInit(): void {
    this.sentSuccess.subscribe(() => this.open(this.content))
    this.sentFailed.subscribe(() => {
      this.open(this.contentFail)
    })
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
