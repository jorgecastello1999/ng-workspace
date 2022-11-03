import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TabledataModule } from '../tabledata/tabledata.module';
import { AngularJomaComponent } from './angular-joma.component';
import { CamionService } from './services/camion/truck.service';
@NgModule({
	declarations: [AngularJomaComponent],
	imports: [CommonModule, HttpClientModule, TabledataModule],
	exports: [AngularJomaComponent],
	providers: [CamionService],
	bootstrap: [AngularJomaComponent],
})
export class AngularJomaModule {}
