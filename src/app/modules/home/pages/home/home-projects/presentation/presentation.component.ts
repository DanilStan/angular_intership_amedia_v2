import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import * as Aos from 'aos'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  videoVisible: boolean = false

  @ViewChild('videoPlayer') videoPlayer?: ElementRef

  toggleVideo() {
    this.videoVisible = true
    const video: HTMLVideoElement = this.videoPlayer?.nativeElement
    video.play()
  }

  ngOnInit(): void {
    Aos.init()
  }
}
