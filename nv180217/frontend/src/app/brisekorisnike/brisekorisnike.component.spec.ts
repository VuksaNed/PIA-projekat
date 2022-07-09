import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisekorisnikeComponent } from './brisekorisnike.component';

describe('BrisekorisnikeComponent', () => {
  let component: BrisekorisnikeComponent;
  let fixture: ComponentFixture<BrisekorisnikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrisekorisnikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrisekorisnikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
