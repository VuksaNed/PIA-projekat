import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentugovoreneprodajeComponent } from './agentugovoreneprodaje.component';

describe('AgentugovoreneprodajeComponent', () => {
  let component: AgentugovoreneprodajeComponent;
  let fixture: ComponentFixture<AgentugovoreneprodajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentugovoreneprodajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentugovoreneprodajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
