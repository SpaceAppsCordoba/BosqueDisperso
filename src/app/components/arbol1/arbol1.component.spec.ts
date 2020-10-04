import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbol1Component } from './arbol1.component';

describe('Arbol1Component', () => {
  let component: Arbol1Component;
  let fixture: ComponentFixture<Arbol1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arbol1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arbol1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
