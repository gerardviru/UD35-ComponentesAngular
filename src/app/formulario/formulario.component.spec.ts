import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formulariocomponent } from './formulario.component';

describe('formulariocomponent', () => {
  let component: formulariocomponent;
  let fixture: ComponentFixture<formulariocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ formulariocomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(formulariocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
