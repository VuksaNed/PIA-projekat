import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindodajnekretninuComponent } from './admindodajnekretninu.component';

describe('AdmindodajnekretninuComponent', () => {
  let component: AdmindodajnekretninuComponent;
  let fixture: ComponentFixture<AdmindodajnekretninuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindodajnekretninuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindodajnekretninuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
