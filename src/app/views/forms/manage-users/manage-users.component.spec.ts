import { TestBed, inject } from '@angular/core/testing';

import { ManageUsersComponent } from './manage-users.component';

describe('a manage-users component', () => {
	let component: ManageUsersComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ManageUsersComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ManageUsersComponent], (ManageUsersComponent) => {
		component = ManageUsersComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});