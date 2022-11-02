import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TabledataComponent } from './tabledata.component';

@NgModule({
	declarations: [TabledataComponent],
	imports: [
		CommonModule,
		NgxDatatableModule.forRoot({
			messages: {
				emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
				totalMessage: 'total', // Footer total message
				selectedMessage: 'selected', // Footer selected message
			},
		}),
	],
	exports: [TabledataComponent],
})
export class TabledataModule {}
