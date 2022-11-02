import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
	providedIn: 'root',
})
export class TraductionService {
	constructor(private translate: TranslateService) {
		this.translate.setDefaultLang('es');
		this.translate.addLangs(['es', 'en', 'ge', 'ch']);
	}
	getLanguages() {
		return this.translate.getLangs();
	}
	useLanguage(lang: string) {
		this.translate.use(lang);
	}
}
