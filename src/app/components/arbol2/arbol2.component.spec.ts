import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbol2Component } from './arbol2.component';

describe('Arbol2Component', () => {
  let component: Arbol2Component;
  let fixture: ComponentFixture<Arbol2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arbol2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arbol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
