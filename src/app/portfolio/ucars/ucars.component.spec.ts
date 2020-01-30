import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcarsComponent } from './ucars.component';

describe('UcarsComponent', () => {
  let component: UcarsComponent;
  let fixture: ComponentFixture<UcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
