import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikovenekretnineComponent } from './korisnikovenekretnine.component';

describe('KorisnikovenekretnineComponent', () => {
  let component: KorisnikovenekretnineComponent;
  let fixture: ComponentFixture<KorisnikovenekretnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikovenekretnineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikovenekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
