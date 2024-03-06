import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from 'src/app/core/core.module'

import { LayoutModule } from 'src/app/shared/modules/layout/layout.module'

import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module'
import { HomeHeroComponent } from 'src/app/modules/home/pages/home/home-start/home-start.component'
import { HomeProjectsComponent } from 'src/app/modules/home/pages/home/home-start/home-projects/home-projects.component'
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component'
import { NewsComponent } from './pages/home/home-start/home-projects/news/news.component'
import { PresentationComponent } from './pages/home/home-start/home-projects/presentation/presentation.component'
import { InfoComponent } from './pages/home/home-start/home-projects/info/info.component'

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, HomeProjectsComponent, NewsComponent, PresentationComponent, InfoComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, LayoutModule],
})
export class HomeModule {}
