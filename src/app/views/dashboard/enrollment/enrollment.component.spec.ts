import { TestBed, inject } from '@angular/core/testing';

import { EnrollmentComponent } from './enrollment.component';

describe('a enrollment component', () => {
	let component: EnrollmentComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EnrollmentComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EnrollmentComponent], (EnrollmentComponent) => {
		component = EnrollmentComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});