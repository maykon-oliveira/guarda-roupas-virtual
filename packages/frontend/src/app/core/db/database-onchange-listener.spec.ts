import { TestBed } from '@angular/core/testing';

import { DatabaseOnChangeListener } from './database-onchange-listener';

describe('DatabaseSyncService', () => {
  let service: DatabaseOnChangeListener;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseOnChangeListener);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
