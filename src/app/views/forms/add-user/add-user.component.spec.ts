import { TestBed, inject } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';

describe('a add-user component', () => {
	let component: AddUserComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AddUserComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AddUserComponent], (AddUserComponent) => {
		component = AddUserComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});