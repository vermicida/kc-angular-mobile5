import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaComponent } from './formulario-alta.component';

describe('FormularioAltaComponent', () => {
  let component: FormularioAltaComponent;
  let fixture: ComponentFixture<FormularioAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
