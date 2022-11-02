import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularJomaModule } from './components/angular-joma/angular-joma.module';
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, AngularJomaModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
