import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJomaComponent } from './angular-joma.component';

describe('AngularJomaComponent', () => {
	let component: AngularJomaComponent;
	let fixture: ComponentFixture<AngularJomaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AngularJomaComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AngularJomaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
