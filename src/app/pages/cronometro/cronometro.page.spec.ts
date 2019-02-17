import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronometroPage } from './cronometro.page';

describe('CronometroPage', () => {
  let component: CronometroPage;
  let fixture: ComponentFixture<CronometroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronometroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronometroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
