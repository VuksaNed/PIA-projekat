import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentdogovoreneponudeComponent } from './agentdogovoreneponude.component';

describe('AgentdogovoreneponudeComponent', () => {
  let component: AgentdogovoreneponudeComponent;
  let fixture: ComponentFixture<AgentdogovoreneponudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentdogovoreneponudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentdogovoreneponudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
