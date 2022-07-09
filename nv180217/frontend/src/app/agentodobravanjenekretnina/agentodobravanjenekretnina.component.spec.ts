import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentodobravanjenekretninaComponent } from './agentodobravanjenekretnina.component';

describe('AgentodobravanjenekretninaComponent', () => {
  let component: AgentodobravanjenekretninaComponent;
  let fixture: ComponentFixture<AgentodobravanjenekretninaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentodobravanjenekretninaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentodobravanjenekretninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
