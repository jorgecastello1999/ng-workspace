import { Component, OnInit } from '@angular/core';
import { TraductionService } from '../../services/traduction/traduction.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
	constructor(private translate: TraductionService) {}

	ngOnInit(): void {
		console.log('hola');
	}
	clickNavBarr() {}
}
