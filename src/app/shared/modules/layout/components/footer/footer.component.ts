import { Component, OnInit } from '@angular/core'

import { FooterIcon } from 'src/app/core/interfaces/page'
import { DataService } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  iconData!: FooterIcon[]

  constructor(private DataServiceIcon: DataService) {}

  ngOnInit(): void {
    this.iconData = this.DataServiceIcon.footerIconData
  }
}
