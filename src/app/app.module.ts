import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './headerComp/header.component';
import { Banner } from './bannerComp/banner.component';

@NgModule({
  declarations: [AppComponent, Header, Banner],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
