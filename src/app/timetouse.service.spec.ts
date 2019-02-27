import { TestBed } from '@angular/core/testing';

import { TimetouseService } from './timetouse.service';

describe('TimetouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimetouseService = TestBed.get(TimetouseService);
    expect(service).toBeTruthy();
  });
});
