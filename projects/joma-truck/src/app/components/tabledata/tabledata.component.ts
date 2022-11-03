import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
	selector: 'app-tabledata',
	templateUrl: './tabledata.component.html',
	styleUrls: ['./tabledata.component.scss'],
})
export class TabledataComponent implements OnInit {
	rows: any[] = [];
	columns: any[] = [{ prop: 'name' }, { name: 'company' }, { name: 'gender' }];
	loadingIndicator = true;
	reorderable = true;
	swapColumns = false;
	temp = [];
	selected = [];
	ColumnMode = ColumnMode;
	SelectionType = SelectionType;

	@Input() file: any;
	@Output() selection: EventEmitter<any> = new EventEmitter();
	@ViewChild(DatatableComponent)
	table!: DatatableComponent;

	constructor() {}
	ngOnInit(): void {
		this.fetch((data: never[]) => {
			this.selected = [data[2]];
			this.temp = [...data];

			this.rows = data;
			setTimeout(() => {
				this.loadingIndicator = false;
			}, 1500);
		});
	}

	fetch(cb: { (data: any): void; (arg0: any): void }) {
		const req = new XMLHttpRequest();
		req.open('GET', `assets/data/company.json`);

		req.onload = () => {
			cb(JSON.parse(req.response));
		};

		req.send();
	}

	onSelect({ selected }: any) {
		console.log('Select Event', selected, this.selected, 'sisoi');
		this.selection.emit(selected);
	}

	onActivate(event: any) {
		console.log('Activate Event', event);
	}
	updateFilter(event: any) {
		const val = event.target.value.toLowerCase();
		console.log(val);
		const bucl = this.columns;
		// filter our data
		const temp = this.temp.filter(function (d: any) {
			bucl.map((col) => {});
			console.log(d.name.toLowerCase().lastIndexOf(val) !== -1 || !val);

			if (d.company.toLowerCase().lastIndexOf(val) !== -1 || !val) {
				return true;
			} else if (d.gender.toLowerCase().lastIndexOf(val) !== -1 || !val) {
				return true;
			} else if (d.name.toLowerCase().lastIndexOf(val) !== -1 || !val) {
				return true;
			} else {
				return false;
			}
		});

		// update the rows
		this.rows = temp;
		// Whenever the filter changes, always go back to the first page
		this.table.offset = 0;
	}

	toggleExpandRow(row: any) {
		console.log('Toggled Expand Row!AAAAAAAAAAAAAA', row);
		this.table.rowDetail.toggleExpandRow(row);
	}

	onDetailToggle(event: any) {
		console.log('Detail Toggled', event);
	}

	onLoadData() {
		const reader = new FileReader();
		if (/.json/.test(this.file.name)) {
			let tab = ['id', 'matricula', 'cajasTotales', 'Cajas llegadas'];
			let archivoJson: any = [];
			reader.onload = function (event: any) {
				const line = event.target.result;
				for (let i = 0; i < line.length; i++) {
					archivoJson.push(line[i]);
				}
			};
			reader.readAsText(this.file);
			console.log(archivoJson);
		} else if (/.csv/.test(this.file.name)) {
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
			reader.readAsText(this.file);
			console.log(objectListCsv);
		}
	}
}
