import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registries } from './registries';

describe('Registries', () => {
  let component: Registries;
  let fixture: ComponentFixture<Registries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
