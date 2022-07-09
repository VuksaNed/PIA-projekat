import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentinboxComponent } from './agentinbox.component';

describe('AgentinboxComponent', () => {
  let component: AgentinboxComponent;
  let fixture: ComponentFixture<AgentinboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentinboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
