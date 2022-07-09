import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentnovanekretninaComponent } from './agentnovanekretnina.component';

describe('AgentnovanekretninaComponent', () => {
  let component: AgentnovanekretninaComponent;
  let fixture: ComponentFixture<AgentnovanekretninaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentnovanekretninaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentnovanekretninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
