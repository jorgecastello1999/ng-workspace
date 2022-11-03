import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';
import { InfoComponent } from './info/info.component';

@NgModule({
	declarations: [NavComponent, InfoComponent],
	imports: [TranslateModule, BrowserModule, AppRoutingModule],
	exports: [NavComponent],
})
export class SharedModule {}
