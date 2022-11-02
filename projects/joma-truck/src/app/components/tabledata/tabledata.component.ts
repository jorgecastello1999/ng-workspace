import { Component, OnInit, ViewChild } from '@angular/core';
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
	selected: any[] = [];

	ColumnMode = ColumnMode;
	SelectionType = SelectionType;

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
}
