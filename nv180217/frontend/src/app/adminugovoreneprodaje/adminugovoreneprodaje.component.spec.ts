import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminugovoreneprodajeComponent } from './adminugovoreneprodaje.component';

describe('AdminugovoreneprodajeComponent', () => {
  let component: AdminugovoreneprodajeComponent;
  let fixture: ComponentFixture<AdminugovoreneprodajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminugovoreneprodajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminugovoreneprodajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
