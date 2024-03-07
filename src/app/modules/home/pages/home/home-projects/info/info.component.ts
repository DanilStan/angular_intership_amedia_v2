import { Component, Input, OnInit } from '@angular/core'
import { InfoData } from 'src/app/core/interfaces/page'
import * as Aos from 'aos'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() infoItem!: InfoData

  ngOnInit(): void {
    Aos.init()
  }
}
