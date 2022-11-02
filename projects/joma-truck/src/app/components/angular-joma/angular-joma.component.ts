import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CamionService } from './services/camion/camion.service';
@Component({
	selector: 'app-angular-joma',
	templateUrl: './angular-joma.component.html',
	styleUrls: ['./angular-joma.component.scss'],
})
export class AngularJomaComponent implements OnInit {
	dtOptions: any = {};
	dtTrigger: Subject<any> = new Subject<any>();

	dataJson: any;
	objCsvFormat: any = [];
	constructor(private camionService: CamionService, private http: HttpClient) {}
	data: any;
	ngOnInit(): void {
		const btnSetTruck = document.querySelector('.btn-set');
		const btnCancelTtruck = document.querySelector('.btn-cancel');
		const archivo = document.querySelector('.control');
		archivo?.addEventListener('change', this.readFile, false);

		//*this.btnSetTruck?.addEventListener('click', this.camionService.setTruckInTable);
		//*this.btnCancelTtruck?.addEventListener('click', this.camionService.cancelTruck);
	}

	readFile(ev: any) {
		const file = ev.target.files[0];
		if (!file) {
			console.log(file);
			return;
		}

		const reader = new FileReader();
		if (/.json/.test(file.name)) {
			let tab = ['id', 'matricula', 'cajasTotales', 'Cajas llegadas'];
			let archivoJson: any = [];
			reader.onload = function (event: any) {
				const line = event.target.result;
				for (let i = 0; i < line.length; i++) {
					archivoJson.push(line[i]);
				}
			};
			reader.readAsText(file);
			console.log(archivoJson);
		} else if (/.csv/.test(file.name)) {
			let row: any[] = [];

			let tab = ['id', 'matricula', 'cajasTotales', 'cajasllegadas'];
			let objectListCsv: any[] = [];
			reader.onload = function (event: any) {
				console.log(event.target.result);

				const line = event.target.result.replaceAll(' ', '').split(/\r?\n/);
				for (let i = 0; i < line.length; i++) {
					let row = line[i].split(',');
					let obj: any = {};
					for (let x = 0; x < row.length; x++) {
						obj[tab[x]] = row[x];
					}
					objectListCsv.push(obj);
				}
			};
			reader.readAsText(file);

			this.objCsvFormat = objectListCsv;
		}
	}
}
