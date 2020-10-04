import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarFotoComponent } from './cargar-foto.component';

describe('CargarFotoComponent', () => {
  let component: CargarFotoComponent;
  let fixture: ComponentFixture<CargarFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
