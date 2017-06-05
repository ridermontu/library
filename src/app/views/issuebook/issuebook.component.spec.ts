/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssuebookComponent } from './issuebook.component';

describe('IssuebookComponent', () => {
  let component: IssuebookComponent;
  let fixture: ComponentFixture<IssuebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
