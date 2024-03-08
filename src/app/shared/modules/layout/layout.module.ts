import { TranslocoModule } from '@ngneat/transloco'

import { FooterIconComponent } from './components/footer/footer-icon/footer-icon.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { CoreModule } from 'src/app/core/core.module'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FooterIconComponent],
  imports: [CommonModule, TranslocoModule, CoreModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
