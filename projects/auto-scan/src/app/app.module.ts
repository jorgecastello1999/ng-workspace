import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from './shared/shared/shared.module';
export function cargarTraductorJson(http: HttpClient) {
	return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
@NgModule({
	declarations: [AppComponent, NavComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: cargarTraductorJson,
				deps: [HttpClient],
			},
		}),
		SharedModule,
	],

	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
