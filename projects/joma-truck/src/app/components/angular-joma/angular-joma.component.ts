import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CamionService } from './services/camion/truck.service';
@Component({
	selector: 'app-angular-joma',
	templateUrl: './angular-joma.component.html',
	styleUrls: ['./angular-joma.component.scss'],
})
export class AngularJomaComponent implements OnInit {
	selected: any;
	dataJson: any;
	objCsvFormat: any = [];
	hueco: string = 'Matricula';
	data: any;
	file: any;
	constructor(private camionService: CamionService, private http: HttpClient) {}

	ngOnInit(): void {
		console.log('init');
	}
	addSelection(selection: any) {
		selection.map((dat: any) => {
			this.selected = dat;
		});
	}
	setTruck() {
		if (this.selected) {
			this.hueco = this.selected.name;
		}
	}
	cancelTruck() {
		this.hueco = '';
	}
	onChangeFile(ev: any) {
		this.file = ev.target.files[0];
		if (!this.file) {
			return;
		}
	}
}
