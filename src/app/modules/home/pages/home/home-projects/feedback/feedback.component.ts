import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Component, OnInit, TemplateRef, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  form!: FormGroup
  private modalService = inject(NgbModal)
  closeResult = ''

  onSubmit(): void {
    if (this.form.valid) {
      this.form.reset()
    }
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

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    })
  }
}
