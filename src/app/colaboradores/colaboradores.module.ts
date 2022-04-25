import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamerComponent } from './gamer/gamer.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';




@NgModule({
  declarations: [
    HeaderComponent,
    GamerComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GamerComponent
  ],
})
export class ColaboradoresModule { }
