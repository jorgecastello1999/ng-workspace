import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-web-template',
	templateUrl: './web-template.component.html',
	styleUrls: ['./web-template.component.scss'],
})
export class WebTemplateComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		console.log('hola');
	}
}
