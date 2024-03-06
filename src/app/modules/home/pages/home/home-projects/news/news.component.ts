import { Component, Input } from '@angular/core'
import { NewsData } from 'src/app/core/interfaces/page'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news!: NewsData
}
