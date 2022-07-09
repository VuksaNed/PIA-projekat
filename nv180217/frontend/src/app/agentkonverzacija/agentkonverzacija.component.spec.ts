import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentkonverzacijaComponent } from './agentkonverzacija.component';

describe('AgentkonverzacijaComponent', () => {
  let component: AgentkonverzacijaComponent;
  let fixture: ComponentFixture<AgentkonverzacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentkonverzacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentkonverzacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
