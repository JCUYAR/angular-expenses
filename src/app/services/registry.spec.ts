import { TestBed } from '@angular/core/testing';

import { Registry } from './registry';

describe('Registry', () => {
  let service: Registry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
