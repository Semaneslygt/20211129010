/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrunComponent } from './urun.component';

describe('UrunComponent', () => {
  let component: UrunComponent;
  let fixture: ComponentFixture<UrunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
