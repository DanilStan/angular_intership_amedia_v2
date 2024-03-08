import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'

import { FeedbackComponent } from './pages/home/home-projects/feedback/feedback.component'
import { InfoComponent } from './pages/home/home-projects/info/info.component'
import { NewsComponent } from './pages/home/home-projects/news/news.component'
import { PresentationComponent } from './pages/home/home-projects/presentation/presentation.component'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-hero/home-hero.component'
import { HomeProjectsComponent } from 'src/app/modules/home/pages/home/home-projects/home-projects.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    HomeProjectsComponent,
    NewsComponent,
    PresentationComponent,
    InfoComponent,
    FeedbackComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule, FormsModule, ReactiveFormsModule, NgbDatepickerModule],
})
export class HomeModule {}
