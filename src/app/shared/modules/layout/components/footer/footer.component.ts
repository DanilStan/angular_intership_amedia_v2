import { DataService } from 'src/app/core/services/data.service'
import { Component, OnInit } from '@angular/core'
import { FooterIcon } from 'src/app/core/interfaces/page'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  iconData!: FooterIcon[]

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.iconData = this.DataService.footerIconData
  }
}
