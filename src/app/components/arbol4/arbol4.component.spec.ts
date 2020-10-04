import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbol4Component } from './arbol4.component';

describe('Arbol4Component', () => {
  let component: Arbol4Component;
  let fixture: ComponentFixture<Arbol4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arbol4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arbol4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
