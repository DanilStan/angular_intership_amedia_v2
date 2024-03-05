import { Component, OnInit } from '@angular/core'
import { NewsData } from 'src/app/core/interfaces/page'
import { NewsDataService } from 'src/app/core/services/news-data.service'

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss'],
})
export class HomeProjectsComponent implements OnInit {
  newsData!: NewsData[]

  constructor(private newsDataService: NewsDataService) {}

  ngOnInit(): void {
    this.newsData = this.newsDataService.newsData
  }
}
