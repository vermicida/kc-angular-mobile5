import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisContactosComponent } from './mis-contactos.component';

describe('MisContactosComponent', () => {
  let component: MisContactosComponent;
  let fixture: ComponentFixture<MisContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisContactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
