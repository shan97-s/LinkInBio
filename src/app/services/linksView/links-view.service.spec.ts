import { TestBed } from '@angular/core/testing';

import { LinksViewService } from './links-view.service';

describe('LinksViewService', () => {
  let service: LinksViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinksViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
