import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregTutorialComponent } from './preg-tutorial.component';

describe('PregTutorialComponent', () => {
  let component: PregTutorialComponent;
  let fixture: ComponentFixture<PregTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
