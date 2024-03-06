import { Component, Input } from '@angular/core'
import { InfoData } from 'src/app/core/interfaces/page'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() infoItem!: InfoData
}
