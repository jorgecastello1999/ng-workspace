import { Component } from '@angular/core';
import { TraductionService } from './shared/services/traduction/traduction.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	langs: string[] = [];

	constructor(public translate: TraductionService) {
		this.langs = this.translate.getLanguages();
		console.log(this.langs);
	}
	changeLanguage(lang: string) {
		this.translate.useLanguage(lang);
	}

	title = 'auto-scan';
}
