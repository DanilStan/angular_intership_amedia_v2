import * as Aos from 'aos'

import { Component, Input, OnInit } from '@angular/core'

import { InfoData } from 'src/app/core/services/data.service'

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
