import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbo3Component } from './arbo3.component';

describe('Arbo3Component', () => {
  let component: Arbo3Component;
  let fixture: ComponentFixture<Arbo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Arbo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Arbo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
