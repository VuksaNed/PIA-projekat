import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsvenekretnineComponent } from './agentsvenekretnine.component';

describe('AgentsvenekretnineComponent', () => {
  let component: AgentsvenekretnineComponent;
  let fixture: ComponentFixture<AgentsvenekretnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsvenekretnineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsvenekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
