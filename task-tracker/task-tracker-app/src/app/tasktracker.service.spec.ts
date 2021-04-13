import { TestBed } from '@angular/core/testing';

import { TasktrackerService } from './tasktracker.service';

describe('TasktrackerService', () => {
  let service: TasktrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasktrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
