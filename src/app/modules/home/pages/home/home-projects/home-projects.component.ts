import { Component, OnInit } from '@angular/core'

import { DataService, InfoData, NewsData } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent implements OnInit {
  newsData!: NewsData[]
  infoData!: InfoData[]

  constructor(private DataServiceAll: DataService) {}

  ngOnInit(): void {
    this.newsData = this.DataServiceAll.newsData
    this.infoData = this.DataServiceAll.infoData
  }
}
