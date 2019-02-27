import { TestBed } from '@angular/core/testing';

import { COMPONENTLISTSERVICE } from './componentlist.service';

describe('ComponentlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: COMPONENTLISTSERVICE = TestBed.get(COMPONENTLISTSERVICE);
    expect(service).toBeTruthy();
  });
});
