import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-state',
	templateUrl: './state.component.html',
	styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit, OnDestroy {
	constructor() {}
	butonCameras = true;
	ngOnInit(): void {}
	cameras() {
		this.butonCameras
			? (this.butonCameras = false)
			: (this.butonCameras = true);
	}

	ngOnDestroy() {
		this.butonCameras = false;
	}
}
