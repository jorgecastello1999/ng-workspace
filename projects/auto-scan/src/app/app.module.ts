import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebTemplateComponent } from './components/web-template/web-template.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, WebTemplateComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
