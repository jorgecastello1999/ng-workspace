import { TestBed } from '@angular/core/testing';

import { CamionService } from './truck.service';

describe('CamionService', () => {
	let service: CamionService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CamionService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('Obtain truck', () => {});
});
