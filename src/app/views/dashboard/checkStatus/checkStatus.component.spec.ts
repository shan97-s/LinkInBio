import { TestBed, inject } from '@angular/core/testing';

import { CheckStatusComponent } from './checkStatus.component';

describe('a checkStatus component', () => {
	let component: CheckStatusComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CheckStatusComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CheckStatusComponent], (CheckStatusComponent) => {
		component = CheckStatusComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});