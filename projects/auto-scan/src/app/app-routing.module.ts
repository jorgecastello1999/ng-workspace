import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmComponent } from './components/alarm/alarm.component';
import { OperationComponent } from './shared/operation/operation.component';
import { StateComponent } from './shared/state/state.component';

const routes: Routes = [
	{
		path: '',

		children: [
			{ path: 'operation', component: OperationComponent },
			{ path: 'state', component: StateComponent },
			{ path: 'alarms', component: AlarmComponent },
			{ path: 'mateinance', component: OperationComponent },
			{ path: 'configuration', component: StateComponent },
			{ path: 'dashboard', component: AlarmComponent },
			{ path: 'readings', component: AlarmComponent },
			{ path: 'info', component: AlarmComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
