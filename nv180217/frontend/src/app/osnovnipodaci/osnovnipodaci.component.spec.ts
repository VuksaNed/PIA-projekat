import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovnipodaciComponent } from './osnovnipodaci.component';

describe('OsnovnipodaciComponent', () => {
  let component: OsnovnipodaciComponent;
  let fixture: ComponentFixture<OsnovnipodaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsnovnipodaciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovnipodaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
