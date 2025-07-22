import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegistry } from './add-registry';

describe('AddRegistry', () => {
  let component: AddRegistry;
  let fixture: ComponentFixture<AddRegistry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRegistry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegistry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
