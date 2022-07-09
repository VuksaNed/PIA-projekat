import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindodajeComponent } from './admindodaje.component';

describe('AdmindodajeComponent', () => {
  let component: AdmindodajeComponent;
  let fixture: ComponentFixture<AdmindodajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindodajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindodajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
