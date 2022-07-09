import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminazurirakorisnikeComponent } from './adminazurirakorisnike.component';

describe('AdminazurirakorisnikeComponent', () => {
  let component: AdminazurirakorisnikeComponent;
  let fixture: ComponentFixture<AdminazurirakorisnikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminazurirakorisnikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminazurirakorisnikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
