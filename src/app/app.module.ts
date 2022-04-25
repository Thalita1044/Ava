import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './colaboradores/banner/banner.component';
import { FooterComponent } from './colaboradores/footer/footer.component';
import { GamerComponent } from './colaboradores/gamer/gamer.component';
import { HeaderComponent } from './colaboradores/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    GamerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
