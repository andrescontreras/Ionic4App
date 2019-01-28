import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexPage } from './flex.page';

describe('FlexPage', () => {
  let component: FlexPage;
  let fixture: ComponentFixture<FlexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
