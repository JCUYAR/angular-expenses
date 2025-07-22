import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegistry } from './update-registry';

describe('UpdateRegistry', () => {
  let component: UpdateRegistry;
  let fixture: ComponentFixture<UpdateRegistry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRegistry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRegistry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
