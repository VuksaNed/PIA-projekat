import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminodobravajnekretnineComponent } from './adminodobravajnekretnine.component';

describe('AdminodobravajnekretnineComponent', () => {
  let component: AdminodobravajnekretnineComponent;
  let fixture: ComponentFixture<AdminodobravajnekretnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminodobravajnekretnineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminodobravajnekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
