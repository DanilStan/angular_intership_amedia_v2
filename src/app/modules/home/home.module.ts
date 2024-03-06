import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-hero/home-hero.component'
import { HomeProjectsComponent } from 'src/app/modules/home/pages/home/home-projects/home-projects.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'
import { NewsComponent } from './pages/home/home-projects/news/news.component'
import { PresentationComponent } from './pages/home/home-projects/presentation/presentation.component'
import { InfoComponent } from './pages/home/home-projects/info/info.component';
import { FeedbackComponent } from './pages/home/home-projects/feedback/feedback.component'

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, HomeProjectsComponent, NewsComponent, PresentationComponent, InfoComponent, FeedbackComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule],
})
export class HomeModule {}
