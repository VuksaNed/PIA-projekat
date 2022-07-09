import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpodesiprocenatComponent } from './adminpodesiprocenat.component';

describe('AdminpodesiprocenatComponent', () => {
  let component: AdminpodesiprocenatComponent;
  let fixture: ComponentFixture<AdminpodesiprocenatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpodesiprocenatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpodesiprocenatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
