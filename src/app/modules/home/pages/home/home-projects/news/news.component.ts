import * as Aos from 'aos'

import { Component, Input, OnInit } from '@angular/core'

import { NewsData } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() news!: NewsData

  ngOnInit(): void {
    Aos.init()
  }
}
