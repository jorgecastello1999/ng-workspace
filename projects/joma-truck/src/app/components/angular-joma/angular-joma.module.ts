import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FiledropModule } from '../filedrop/filedrop.module';
import { TabledataModule } from '../tabledata/tabledata.module';
import { AngularJomaComponent } from './angular-joma.component';

import { TruckService } from './services/camion/truck.service';
@NgModule({
	declarations: [AngularJomaComponent],
	imports: [CommonModule, HttpClientModule, TabledataModule, FiledropModule],
	exports: [AngularJomaComponent],
	providers: [TruckService],
	bootstrap: [AngularJomaComponent],
})
export class AngularJomaModule {}
