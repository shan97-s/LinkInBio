import { TestBed, inject } from '@angular/core/testing';

import { UserTransactionsLogComponent } from './user-transactions-log.component';

describe('a user-transactions-log component', () => {
	let component: UserTransactionsLogComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserTransactionsLogComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserTransactionsLogComponent], (UserTransactionsLogComponent) => {
		component = UserTransactionsLogComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});