import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlarmComponent } from './components/alarm/alarm.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ReadingsComponent } from './components/readings/readings.component';
import { OperationComponent } from './shared/operation/operation.component';
import { SharedModule } from './shared/shared.module';
import { StateComponent } from './shared/state/state.component';
export function cargarTraductorJson(http: HttpClient) {
	return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
@NgModule({
	declarations: [
		AppComponent,
		OperationComponent,
		StateComponent,
		AlarmComponent,
		MaintenanceComponent,
		ConfigurationComponent,
		DashboardComponent,
		ReadingsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		SharedModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: cargarTraductorJson,
				deps: [HttpClient],
			},
		}),
	],

	providers: [],
	bootstrap: [AppComponent],
	exports: [TranslateModule],
})
export class AppModule {}
