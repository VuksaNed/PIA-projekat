import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoncerzacijaComponent } from './koncerzacija.component';

describe('KoncerzacijaComponent', () => {
  let component: KoncerzacijaComponent;
  let fixture: ComponentFixture<KoncerzacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoncerzacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoncerzacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
