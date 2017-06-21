import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoContactoComponent } from './nuevo-contacto.component';

describe('NuevoContactoComponent', () => {
  let component: NuevoContactoComponent;
  let fixture: ComponentFixture<NuevoContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
