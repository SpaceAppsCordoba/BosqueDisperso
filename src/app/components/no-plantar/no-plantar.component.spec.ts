import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPlantarComponent } from './no-plantar.component';

describe('NoPlantarComponent', () => {
  let component: NoPlantarComponent;
  let fixture: ComponentFixture<NoPlantarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPlantarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPlantarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
