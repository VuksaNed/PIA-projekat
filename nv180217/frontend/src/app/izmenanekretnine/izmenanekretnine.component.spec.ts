import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenanekretnineComponent } from './izmenanekretnine.component';

describe('IzmenanekretnineComponent', () => {
  let component: IzmenanekretnineComponent;
  let fixture: ComponentFixture<IzmenanekretnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmenanekretnineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenanekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
