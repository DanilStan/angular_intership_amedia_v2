import { Component, Input } from '@angular/core'

import { FooterIcon } from 'src/app/core/interfaces/page'

@Component({
  selector: 'app-footer-icon',
  templateUrl: './footer-icon.component.html',
  styleUrls: ['./footer-icon.component.scss'],
})
export class FooterIconComponent {
  @Input() iconItem!: FooterIcon
}
