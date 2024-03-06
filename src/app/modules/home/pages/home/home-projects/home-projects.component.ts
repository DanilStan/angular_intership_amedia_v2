import { Component, OnInit } from '@angular/core'
import { InfoData, NewsData } from 'src/app/core/interfaces/page'
import { DataService } from 'src/app/core/services/data.service'

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent implements OnInit {
  newsData!: NewsData[]
  infoData!: InfoData[]

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.newsData = this.DataService.newsData
    this.infoData = this.DataService.infoData
  }
}
