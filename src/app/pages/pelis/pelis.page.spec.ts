import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisPage } from './pelis.page';

describe('PelisPage', () => {
  let component: PelisPage;
  let fixture: ComponentFixture<PelisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
