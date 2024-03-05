import { Page } from 'src/app/core/interfaces/page'
import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent {
  videoVisible: boolean = false

  @ViewChild('videoPlayer') videoPlayer?: ElementRef

  toggleVideo() {
    this.videoVisible = true
    const video: HTMLVideoElement = this.videoPlayer?.nativeElement
    video.play()
    // console.dir(video)
  }
}
