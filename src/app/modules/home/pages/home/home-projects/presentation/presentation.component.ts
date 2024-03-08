import * as Aos from 'aos'

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  videoVisible = false

  @ViewChild('videoPlayer') videoPlayer?: ElementRef

  toggleVideo(): void {
    this.videoVisible = true
    const video: HTMLVideoElement = this.videoPlayer?.nativeElement

    video.play()
  }

  ngOnInit(): void {
    Aos.init()
  }
}
