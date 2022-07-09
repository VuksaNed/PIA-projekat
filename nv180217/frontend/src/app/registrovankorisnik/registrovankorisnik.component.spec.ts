import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrovankorisnikComponent } from './registrovankorisnik.component';

describe('RegistrovankorisnikComponent', () => {
  let component: RegistrovankorisnikComponent;
  let fixture: ComponentFixture<RegistrovankorisnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrovankorisnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrovankorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
